import * as React from 'react';
import { Urls, SiteContent } from '../../definitions';
import './footer.scss';

export interface IFooterProps { }

export class Footer extends React.Component<IFooterProps, {}> {
	constructor(props: IFooterProps) {
		super(props);
	}

	public renderSocialMediaList = () => {
		return (
			<ul className='social-media-list'>
				<li>
					<a href={Urls.ResumeLink} target='_blank'><i className='fa fa-file-text fa-lg icon'></i><span> Resume</span></a>
				</li>
				<li>
					<a href={Urls.LinkedIn} target='_blank'><i className='fa fa-linkedin-square fa-lg icon'></i><span> LinkedIn</span></a>
				</li>
				<li>
					<a href={Urls.Mailto} target='_blank'><i className='fa fa-envelope-o fa-lg icon'></i><span> Email</span></a>
				</li>
			</ul>
		);
	}

	public render() {
		return (
			<footer className='footer'>
				<div className='wrapper'>
					<div className='content'>
						{this.renderSocialMediaList()}
					</div>
					<div className='content'>
						<ul className='made-with'>
							<li>
								Made with <div className='pulse'>🍩</div> in <span style={{ color: 'black' }}>London</span>
							</li>
						</ul>
					</div>
				</div>
			</footer>
		);
	}
}
