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
			imageSrc: require('../assets/credit-card.svg'),
			content:
				<p>
					Expense Management is a time-consuming and painful experience. Your mission to make <span className='lead font-weight-bold'>company spending
					easier for everyone </span> by building a solution that empowers employees
					to spend more time in growing the business and less on admin work perfectly aligns with my career goals of developing fintech products.
				</p>
		},
		{
			imageAlt: 'Star Image',
			imageSrc: require('../assets/star.svg'),
			content:
				<p>
					Working in an environment where <span className='lead font-weight-bold'>complexity is addressed with simplicity</span>. I have often seen that
					in the face of complexity organisations either fail to plan and develop strategies or have really complex processes that hamper growth.
					In stark contrast, I’m particularly impressed with your lean MVP approach. By openly engaging with customers through your changelog and being
					transparent of your product roadmap and decisions has enabled Pleo to grow fiercely in a short span of time and create an impact.
				</p>
		},
		{
			imageAlt: 'World Image',
			imageSrc: require('../assets/earth.svg'),
			content:
				<p>
					Well, <span className='lead font-weight-bold'>I'm selfish!</span> My job as a consultant requires me to travel extensively and I have first-hand
					experienced the pain of doing expenses. Creating the ultimate company payment card solution that has the potential to bring about a paradigm shift
					in how companies spend and manage the backend process is really exciting. By working for Pleo, I’ll not only improve my life but the lives of
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
					process automation within traditional banks and WAM firms to improve customer experiences
					and margins. Rather than consulting from the sidelines, I’m now hungry to work at the forefront with Pleo
					to build a solution that meets the needs of today’s modern workforce – i.e. reshaping how businesses manage
					spending (i.e. world domination 😎)
		</p>
		},
		{
			heading1: 'Strong Program Management skills',
			heading2: null,
			imageAlt: 'Number 2',
			imageSrc: require('../assets/why-me-2.svg'),
			content:
				<p>
					Through my stint at EY, I have managed several projects pertaining to strategy, process efficiency and growth
					expansion. Some of the common themes in these engagements have been - identifying pain points,
					communicating &amp; negotating with internal/external stakeholders and developing product roadmaps.
					For e.g. launching a STEM app to 9k school girls across 3 countries, designing and
					launching a pilot Robo-Advisor for a Spanish retail bank to 30k customers, etc. I believe my experience in
					program management will prove to be an asset as I'll be closely working with teams across the firm to drive growth,
					international expansion and plan key focus areas over the next one year.
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
					Be it my leap from Luxury Brand Management to Consulting and now building a spending solution that addresses a pain point faced by every industry.
					I have a willingness to say “yes!” to new opportunities, and a commitment to lifelong learning.
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
					clients/senior stakeholders to understand their pain points and intended future
					state plans. I leverage all the information to structure solutions, write business improvement
					proposals and deliver findings. I’m very comfortable and confident when it comes to managing
					relationships with key clients and stakeholders.
				</p>
		}
	];

	public static TimelineContent: Array<IWWColData> = [];
	public static EmailId = 'poorvanangia0301@gmail.com';
	public static OnlineHandle = 'poorvanangia';
}
