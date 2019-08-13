import * as React from 'react';
import { hot } from 'react-hot-loader';
import { Container } from 'reactstrap';
import {
	Header, WhyFreetrade, WhyMe, BackToTop, Conclusion,
	Footer, Timeline
} from '../components/index';
import { SiteContent } from '../definitions/siteContent';

export interface IAppProps { }

class App extends React.Component<IAppProps, {}> {
	constructor(props: IAppProps) {
		super(props);
	}

	public render() {
		return (
			<div>
				<Header />
				<Container>
					<WhyFreetrade data={SiteContent.WhyFreetrade} />
					<hr className='section-divider' />
					<WhyMe data={SiteContent.WhyMe} />
					{/* <hr className='section-divider' /> */}
					{/* <Timeline data={SiteContent.TimelineContent} /> */}
					<Conclusion />
				</Container>
				<BackToTop />
				<Footer />
			</div>
		);
	}
}

export default hot(module)(App);
