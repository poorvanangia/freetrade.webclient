import * as React from 'react';
import { IWWColData } from '../components/whyFreetrade/whyFreetrade';
import { IWMColData } from '../components/whyMe/whyMe';

/**
 * Class to hold all the Site relevant content.
 */
export class SiteContent {
	public static WhyFreetrade: Array<IWWColData> = [
		{
			imageAlt: 'Stocks Image',
			imageSrc: require('../assets/stocks.svg'),
			content:
				<p>
					Buying and selling shares in Europe is an expensive, time-consuming and painful experience,
					which is why most people don’t bother. Your mission to make <span className='lead font-weight-bold'>investing accessible to everyone </span>
					by building a new kind of stockbroker and transforming the way people invest perfectly aligns with my career goals.
				</p>
		},
		{
			imageAlt: 'Star Image',
			imageSrc: require('../assets/star.svg'),
			content:
				<p>
					Working in an environment where <span className='lead font-weight-bold'>complexity is addressed with simplicity</span>. I have often seen that in the
					face of complexity organisations either fail to plan and develop strategies or have really complex processes
					that hamper growth. In stark contrast, I’m particularly impressed with your lean MVP approach. By openly engaging
					with customers and being transparent of your product roadmap and decisions, Freetrade has grown fiercely in
					a short span of time and created an enormous impact.
				</p>
		},
		{
			imageAlt: 'World Image',
			imageSrc: require('../assets/world-img.svg'),
			content:
				<p>
					Well, <span className='lead font-weight-bold'>I'm selfish!</span> I have worked extensively with traditional banks
					and wealth management firms and have seen first-hand how technology is transforming the financial industry.
					Creating the ultimate challenger stock brokerage app that has the potential to bring about a paradigm shift in
					how we build wealth is really exciting. By working for Freetrade, I’ll not only improve my life but the lives of
					millions of others. Everybody wins!
				</p>
		}
	];

	public static WhyMe: Array<IWMColData> = [
		{
			heading1: 'Passionate about FinTech',
			heading2: null,
			imageAlt: 'Number 1',
			imageSrc: require('../assets/why-me-1.svg'),
			content:
				<p>
					A chance encounter in this industry spurred into what has now become an all-consuming interest in Fintech.
					Over the last year, I have extensively advocated for and introduced cutting edge technologies and
					process automation within traditional banks and WAM firms with the aim of improving customer experiences
					and margins. Rather than consulting from the sidelines, I’m now hungry to work at the forefront with a
					challenger brokerage like Freetrade to introduce the benefits of simplicity &amp; technology within investing
					to the masses (i.e. world domination 😎 )
		</p>
		},
		{
			heading1: 'Strong Program Management skills',
			heading2: null,
			imageAlt: 'Number 2',
			imageSrc: require('../assets/why-me-2.svg'),
			content:
				<p>
					Through my stint at EY, I have managed several projects pertaining to business strategy, fin-tech and growth
					expansion. Some of the common themes in these engagements have been - identifying pain points,
					developing product roadmaps and engaging, negotiating and communicating with internal/external
					stakeholders. For e.g. launching a STEM app to 10k school girls across 4 countries, designing and
					launching a pilot Robo-Advisor for a Spanish retail bank to 30k customers, etc. My experience in program
					management will prove to be an asset for Freetrade as it prepares to expand abroad. Heck, I even project
					managed the creation of this website!
				</p>
		},
		{
			heading1: 'Habit of embracing risk.',
			heading2: 'Saying "yes!" to building careers in cutting edge fields.',
			imageAlt: 'Number 3',
			imageSrc: require('../assets/why-me-3.svg'),
			content:
				<p>
					I’ve always been motivated by innovation and disrupting markets. I think there is a real
					thrill that comes with jumping into a new industry, helping it to grow, and making things better.
					Be it my leap from Luxury Brand Management to Technology Consulting for Financial Institutions
					and now to building a challenger stock trading app. I have a willingness to say “yes!” to new
					opportunities, and a commitment to lifelong learning.
				</p>
		},
		{
			heading1: 'Ability to work with customers & senior stakeholders',
			heading2: null,
			imageAlt: 'Number 4',
			imageSrc: require('../assets/why-me-4.svg'),
			content:
				<p>
					As a consultant, I spend a good chunk of my time conducting research interviews with
					clients/senior stakeholders to understand the issues their pain points and intended future
					state plan. I leverage all the information to structure solutions, write business improvement
					proposals and deliver our findings. I’m very comfortable and confident when it comes to managing
					senior relationships among key partners and stakeholders.
				</p>
		}
	];

	public static TimelineContent: Array<IWWColData> = [];
	public static EmailId = 'poorvanangia03@gmail.com';
	public static OnlineHandle = 'poorvanangia';
}
