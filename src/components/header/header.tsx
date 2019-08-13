import * as React from 'react';
import { Jumbotron, Container, Row, Col } from 'reactstrap';
import { Urls } from '../../definitions';
import './header.scss';

let meEdited = require('../../assets/me.png');

export interface IHeaderProps { }

export class Header extends React.Component<IHeaderProps, {}> {
	constructor(props: IHeaderProps) {
		super(props);
	}

	public render() {
		return (
			<Jumbotron fluid className='intro'>
				<Container fluid>
					<Row>
						<Col lg='5' md={{ order: 2 }} className='text-center'>
							<img src={meEdited} alt='Thumbnail' />
						</Col>
						<Col lg='7' md={{ order: 1 }} className='desc1'>
							<h1 className='display-4'>
								Hello! My name is <strong><a href={Urls.ResumeLink} target='_blank' className='name'>Poorva Nangia</a></strong>
							</h1>
							<h3>
								I would like to help <strong><span className='highlight'>Freetrade</span></strong> democratise <br /> 'Free-Trades'
								as an <strong><span className='highlight'> International Expansions </span></strong> Associate
								<span className='blink'>|</span>
							</h3>
						</Col>
					</Row>
				</Container>
			</Jumbotron>
		);
	}
}
