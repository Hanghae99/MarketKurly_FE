import React from 'react';
import styled from 'styled-components';

const Grid = props => {

	const { 
		flex, 
		gridBox,
		width, 
		margin, 
		padding, 
		bg, 
		children, 
		center, 
		height, 
		position,
		justify,
	} = props;

	const styles = {
		flex: flex,
		width: width,
		margin: margin,
		padding: padding,
		bg: bg,
		center: center,
		gridBox: gridBox,
		height: height,
        position,
		justify,
	};

	if (gridBox) {
		return (
			<React.Fragment>
				<ParentsGridbox {...styles}>{children}</ParentsGridbox>
			</React.Fragment>
		);
	}

	return (
		<React.Fragment>
			<GridBox {...styles}>{children}</GridBox>
		</React.Fragment>
	);
};

Grid.defaultProp = {
	children: null,
	flex: false,
	width: '100%',
	padding: false,
	margin: false,
	bg: false,
	center: false,
	gridBox: false,
	height: false,
    position: "static",
	justify: false,
};

const GridBox = styled.div`
	width: ${props => props.width};
    position: ${props => props.position};
	box-sizing: border-box;
	${props => (props.center ? `text-align:center` : '')};
	${props => (props.padding ? `padding:${props.padding}` : '')};
	${props => (props.margin ? `margin:${props.margin}` : '')};
	${props => (props.bg ? `background-color:${props.bg}` : '')};
	${props => (props.flex ? `display:flex; align-items:center; justify-content:space-between` : '')};
	${props => (props.height ? `height:${props.height}` : '')};
	${props => (props.justify ? `justify-content:${props.justify}` : '')};
	/* border: 1px red solid; */
`;

const ParentsGridbox = styled.div`
	width: ${props => props.width};
	box-sizing: border-box;
	${props => (props.center ? `text-align:center` : '')};
	${props => (props.padding ? `padding:${props.padding}` : '')};
	${props => (props.margin ? `margin:${props.margin}` : '')};
	${props => (props.bg ? `background-color:${props.bg}` : '')};
	display: grid;
	grid-template-columns: repeat(3, 308px);
	grid-column-gap: 24px;
	align-items: center;
`;

export default Grid;
