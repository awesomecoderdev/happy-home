"use client";
import Image from "next/image";
import Logo from "@/components/icon/logo.svg";
import PlayButton from "@/components/icon/play-button.svg";
import BriefcaseIcon from "@/components/icon/briefcase.svg";
import LocationIcon from "@/components/icon/location.svg";
import ProfileIcon from "@/components/icon/location.svg";
import MenuIcon from "@/components/icon/menu.svg";

const menu = ["Home", "About us", "Blogs", "Contact"];
const features = [
	{
		icon: BriefcaseIcon,
		title: "Work-Life Balance",
		description:
			"Many remote jobs also come with flexible schedules, which means that workers can start and end their day as they choose.",
		color: "bg-orange",
	},
	{
		icon: LocationIcon,
		title: "Work Anywhere",
		description:
			"Having access to a broader range of job opportunities that aren’t limited by geographic location. This can be especially helpful.",
		color: "bg-blue",
	},
	{
		icon: ProfileIcon,
		title: "Improved Inclusivity",
		description:
			"Remote work enables companies to embrace diversity and inclusion by hiring people from different backgrounds.",
		color: "bg-pink",
	},
];

export default function Page() {
	return (
		<main className="w-full min-h-screen font-sans text-gray-900 overflow-hidden">
			<div className="bg-gradient-to-b from-[#FEE6F7] to-white">
				<Image
					src={"/img/blob.svg"}
					alt=""
					height={300}
					width={300}
					className="absolute top-0 right-0 pointer-events-none"
				/>
				<div className="px-6 mx-auto max-w-6xl">
					<div className="flex justify-between items-center py-10">
						<Image src={Logo} alt="Logo" height={24} width={120} />
						<nav className="hidden md:flex md:items-center md:space-x-10">
							{menu.map((item, i) => (
								<a
									key={i}
									href="#"
									className="text-gray-700 hover:text-gray-900"
								>
									{item}
								</a>
							))}
							<a
								href="#"
								className="font-semibold text-indigo-600 hover:text-indigo-800"
							>
								Try now
							</a>
						</nav>
						<button className="p-4 md:hidden">
							<Image
								src={MenuIcon}
								alt=""
								height={24}
								width={24}
								className="w-6 h-6 text-gray-800"
							/>
						</button>
					</div>
				</div>
				<div className="px-6 mx-auto max-w-6xl">
					<div className="flex flex-col-reverse items-center md:flex-row lg:items-end">
						<div className="pt-24 pr-8 pb-24 text-center md:pb-12 md:w-1/2 md:text-left">
							<h1 className="relative z-10  font-bold lg:text-6xl md:text-5xl text-4xl font-display">
								Learn the
								<span className="relative after:content-[url(/img/scratch.svg)] after:absolute after:-top-2 after:-right-6 after:-z-1">
									best
								</span>
								ways for staying
								<span className="relative after:content-[url(/img/decoration.svg)] after:absolute after:-bottom-2 after:-right-8 after:-z-1">
									productive
								</span>
							</h1>
							<p className="pt-8 text-lg leading-relaxed text-gray-500 md:max-w-md md:text-xl">
								Working at home is definitely a convenient
								option and makes sense in these unprecedented
								times.
							</p>
							<div className="flex justify-center items-center pt-12 space-x-6 md:justify-start">
								<button className="flex justify-center items-center py-4 px-8 font-bold tracking-wide leading-7 text-white bg-blue-600 rounded-xl hover:shadow-xl">
									Get Tips
								</button>
								<button className="flex items-center">
									<Image
										src={MenuIcon}
										alt=""
										height={24}
										width={24}
										className="drop-shadow-lg hover:drop-shadow-xl"
									/>
									<span className="pl-4 font-bold tracking-wide">
										Learn More
									</span>
								</button>
							</div>
						</div>
						<div className="flex items-end w-1/2 border-b border-gray-400">
							<Image
								src={"/img/illustration.svg"}
								alt=""
								height={300}
								width={300}
							/>
						</div>
					</div>
				</div>
			</div>
			<div className="bg-gray-50">
				<div className="py-12 px-6 mx-auto max-w-6xl">
					<div className="flex flex-col gap-5 md:flex-row">
						{features.map((feature, i) => (
							<div
								key={i}
								className="flex flex-col p-8 space-y-4 bg-white rounded-lg border border-gray-200 transition-shadow duration-500 ease-out cursor-pointer hover:shadow-xl"
							>
								<div className="flex items-center space-x-3">
									<div className="relative">
										<span
											className={`${feature.color} absolute top-0 left-4 w-3 h-3 rounded-full opacity-50`}
										/>
										<Image
											src={feature.icon}
											alt=""
											height={24}
											width={24}
											className="relative"
										/>
									</div>
									<div className="relative">
										<span
											className={` ${feature.color} absolute right-0 bottom-1 w-12 h-1.5 opacity-60`}
										/>
										<h2 className="relative text-xl font-display">
											{feature.title}
										</h2>
									</div>
								</div>
								<p className="text-sm leading-relaxed text-gray-500">
									{feature.description}
								</p>
							</div>
						))}
					</div>
				</div>
			</div>
			<section className="bg-white dark:bg-gray-900 px-6 mx-auto max-w-6xl">
				<div className="container px-6 py-8 mx-auto">
					<div className="sm:flex sm:items-center sm:justify-between">
						<div>
							<h2 className="text-2xl font-bold text-gray-800 lg:text-3xl dark:text-gray-100">
								Simple, transparent pricing
							</h2>
							<p className="mt-4 text-gray-500 dark:text-gray-400">
								No Contracts. No surorise fees.
							</p>
						</div>

						<div className="overflow-hidden p-0.5 mt-6 border rounded-lg dark:border-gray-700">
							<div className="sm:-mx-0.5 flex">
								<button className=" focus:outline-none px-3 w-1/2 sm:w-auto py-1 sm:mx-0.5 text-white bg-blue-500 rounded-lg">
									Monthly
								</button>
								<button className=" focus:outline-none px-3 w-1/2 sm:w-auto py-1 sm:mx-0.5 text-gray-800 dark:text-gray-200 dark:hover:bg-gray-800 bg-transparent rounded-lg hover:bg-gray-200">
									Yearly
								</button>
							</div>
						</div>
					</div>

					<div className="grid gap-6 mt-16 -mx-6 sm:gap-8 sm:grid-cols-2 lg:grid-cols-3">
						<div className="px-6 py-4 transition-colors duration-300 transform rounded-lg hover:bg-gray-200 dark:hover:bg-gray-800">
							<p className="text-lg font-medium text-gray-800 dark:text-gray-100">
								Intro
							</p>

							<h4 className="mt-2 text-3xl font-semibold text-gray-800 dark:text-gray-100">
								$19{" "}
								<span className="text-base font-normal text-gray-600 dark:text-gray-400">
									/ Month
								</span>
							</h4>

							<p className="mt-4 text-gray-500 dark:text-gray-300">
								For most businesses that want to optimaize web
								queries.
							</p>

							<div className="mt-8 space-y-8">
								<div className="flex items-center">
									<svg
										xmlns="http://www.w3.org/2000/svg"
										className="w-5 h-5 text-blue-500"
										viewBox="0 0 20 20"
										fill="currentColor"
									>
										<path
											fillRule="evenodd"
											d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
											clipRule="evenodd"
										/>
									</svg>

									<span className="mx-4 text-gray-700 dark:text-gray-300">
										All limited links
									</span>
								</div>

								<div className="flex items-center">
									<svg
										xmlns="http://www.w3.org/2000/svg"
										className="w-5 h-5 text-blue-500"
										viewBox="0 0 20 20"
										fill="currentColor"
									>
										<path
											fillRule="evenodd"
											d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
											clipRule="evenodd"
										/>
									</svg>

									<span className="mx-4 text-gray-700 dark:text-gray-300">
										Own analytics platform
									</span>
								</div>

								<div className="flex items-center">
									<svg
										xmlns="http://www.w3.org/2000/svg"
										className="w-5 h-5 text-blue-500"
										viewBox="0 0 20 20"
										fill="currentColor"
									>
										<path
											fillRule="evenodd"
											d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
											clipRule="evenodd"
										/>
									</svg>

									<span className="mx-4 text-gray-700 dark:text-gray-300">
										Chat support
									</span>
								</div>

								<div className="flex items-center">
									<svg
										xmlns="http://www.w3.org/2000/svg"
										className="w-5 h-5 text-blue-500"
										viewBox="0 0 20 20"
										fill="currentColor"
									>
										<path
											fillRule="evenodd"
											d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
											clipRule="evenodd"
										/>
									</svg>

									<span className="mx-4 text-gray-700 dark:text-gray-300">
										Optimize hashtags
									</span>
								</div>

								<div className="flex items-center">
									<svg
										xmlns="http://www.w3.org/2000/svg"
										className="w-5 h-5 text-blue-500"
										viewBox="0 0 20 20"
										fill="currentColor"
									>
										<path
											fillRule="evenodd"
											d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
											clipRule="evenodd"
										/>
									</svg>

									<span className="mx-4 text-gray-700 dark:text-gray-300">
										Unlimited users
									</span>
								</div>
							</div>

							<button className="w-full px-4 py-2 mt-10 font-medium tracking-wide text-white capitalize transition-colors duration-300 transform bg-blue-500 rounded-md hover:bg-blue-600 focus:outline-none focus:bg-blue-600">
								Choose plan
							</button>
						</div>

						<div className="px-6 py-4 transition-colors duration-300 transform rounded-lg hover:bg-gray-200 dark:hover:bg-gray-800">
							<p className="text-lg font-medium text-gray-800 dark:text-gray-100">
								Base
							</p>

							<h4 className="mt-2 text-3xl font-semibold text-gray-800 dark:text-gray-100">
								$39{" "}
								<span className="text-base font-normal text-gray-600 dark:text-gray-400">
									/ Month
								</span>
							</h4>

							<p className="mt-4 text-gray-500 dark:text-gray-300">
								For most businesses that want to optimaize web
								queries.
							</p>

							<div className="mt-8 space-y-8">
								<div className="flex items-center">
									<svg
										xmlns="http://www.w3.org/2000/svg"
										className="w-5 h-5 text-blue-500"
										viewBox="0 0 20 20"
										fill="currentColor"
									>
										<path
											fillRule="evenodd"
											d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
											clipRule="evenodd"
										/>
									</svg>

									<span className="mx-4 text-gray-700 dark:text-gray-300">
										All limited links
									</span>
								</div>

								<div className="flex items-center">
									<svg
										xmlns="http://www.w3.org/2000/svg"
										className="w-5 h-5 text-blue-500"
										viewBox="0 0 20 20"
										fill="currentColor"
									>
										<path
											fillRule="evenodd"
											d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
											clipRule="evenodd"
										/>
									</svg>

									<span className="mx-4 text-gray-700 dark:text-gray-300">
										Own analytics platform
									</span>
								</div>

								<div className="flex items-center">
									<svg
										xmlns="http://www.w3.org/2000/svg"
										className="w-5 h-5 text-blue-500"
										viewBox="0 0 20 20"
										fill="currentColor"
									>
										<path
											fillRule="evenodd"
											d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
											clipRule="evenodd"
										/>
									</svg>

									<span className="mx-4 text-gray-700 dark:text-gray-300">
										Chat support
									</span>
								</div>

								<div className="flex items-center">
									<svg
										xmlns="http://www.w3.org/2000/svg"
										className="w-5 h-5 text-blue-500"
										viewBox="0 0 20 20"
										fill="currentColor"
									>
										<path
											fillRule="evenodd"
											d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
											clipRule="evenodd"
										/>
									</svg>

									<span className="mx-4 text-gray-700 dark:text-gray-300">
										Optimize hashtags
									</span>
								</div>

								<div className="flex items-center">
									<svg
										xmlns="http://www.w3.org/2000/svg"
										className="w-5 h-5 text-blue-500"
										viewBox="0 0 20 20"
										fill="currentColor"
									>
										<path
											fillRule="evenodd"
											d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
											clipRule="evenodd"
										/>
									</svg>

									<span className="mx-4 text-gray-700 dark:text-gray-300">
										Unlimited users
									</span>
								</div>
							</div>

							<button className="w-full px-4 py-2 mt-10 font-medium tracking-wide text-white capitalize transition-colors duration-300 transform bg-blue-500 rounded-md hover:bg-blue-600 focus:outline-none focus:bg-blue-600">
								Choose plan
							</button>
						</div>

						<div className="px-6 py-4 transition-colors duration-300 transform bg-gray-700 rounded-lg dark:bg-gray-800">
							<p className="text-lg font-medium text-gray-100">
								Popular
							</p>

							<h4 className="mt-2 text-3xl font-semibold text-gray-100">
								$99{" "}
								<span className="text-base font-normal text-gray-400">
									/ Month
								</span>
							</h4>

							<p className="mt-4 text-gray-300">
								For most businesses that want to optimaize web
								queries.
							</p>

							<div className="mt-8 space-y-8">
								<div className="flex items-center">
									<svg
										xmlns="http://www.w3.org/2000/svg"
										className="w-5 h-5 text-blue-500"
										viewBox="0 0 20 20"
										fill="currentColor"
									>
										<path
											fillRule="evenodd"
											d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
											clipRule="evenodd"
										/>
									</svg>

									<span className="mx-4 text-gray-300">
										All limited links
									</span>
								</div>

								<div className="flex items-center">
									<svg
										xmlns="http://www.w3.org/2000/svg"
										className="w-5 h-5 text-blue-500"
										viewBox="0 0 20 20"
										fill="currentColor"
									>
										<path
											fillRule="evenodd"
											d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
											clipRule="evenodd"
										/>
									</svg>

									<span className="mx-4 text-gray-300">
										Own analytics platform
									</span>
								</div>

								<div className="flex items-center">
									<svg
										xmlns="http://www.w3.org/2000/svg"
										className="w-5 h-5 text-blue-500"
										viewBox="0 0 20 20"
										fill="currentColor"
									>
										<path
											fillRule="evenodd"
											d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
											clipRule="evenodd"
										/>
									</svg>

									<span className="mx-4 text-gray-300">
										Chat support
									</span>
								</div>

								<div className="flex items-center">
									<svg
										xmlns="http://www.w3.org/2000/svg"
										className="w-5 h-5 text-blue-500"
										viewBox="0 0 20 20"
										fill="currentColor"
									>
										<path
											fillRule="evenodd"
											d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
											clipRule="evenodd"
										/>
									</svg>

									<span className="mx-4 text-gray-300">
										Optimize hashtags
									</span>
								</div>

								<div className="flex items-center">
									<svg
										xmlns="http://www.w3.org/2000/svg"
										className="w-5 h-5 text-blue-500"
										viewBox="0 0 20 20"
										fill="currentColor"
									>
										<path
											fillRule="evenodd"
											d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
											clipRule="evenodd"
										/>
									</svg>

									<span className="mx-4 text-gray-300">
										Unlimited users
									</span>
								</div>
							</div>

							<button className="w-full px-4 py-2 mt-10 font-medium tracking-wide text-white capitalize transition-colors duration-300 transform bg-blue-500 rounded-md hover:bg-blue-600 focus:outline-none focus:bg-blue-600">
								Choose plan
							</button>
						</div>
					</div>
				</div>
			</section>

			<section className="bg-white px-6 mx-auto max-w-6xl">
				<div className="container px-6 py-12 mx-auto">
					<h1 className="text-2xl font-semibold text-gray-800 lg:text-3xl dark:text-white">
						Frequently asked questions.
					</h1>

					<div className="grid grid-cols-1 gap-8 mt-8 lg:mt-16 md:grid-cols-2 xl:grid-cols-3">
						<div>
							<div className="inline-block p-3 text-white bg-blue-600 rounded-lg">
								<svg
									xmlns="http://www.w3.org/2000/svg"
									className="w-6 h-6"
									fill="none"
									viewBox="0 0 24 24"
									stroke="currentColor"
								>
									<path
										strokeLinecap="round"
										strokeLinejoin="round"
										strokeWidth="2"
										d="M8.228 9c.549-1.165 2.03-2 3.772-2 2.21 0 4 1.343 4 3 0 1.4-1.278 2.575-3.006 2.907-.542.104-.994.54-.994 1.093m0 3h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
									/>
								</svg>
							</div>

							<div>
								<h1 className="text-xl font-semibold text-gray-700 dark:text-white">
									What can i expect at my first consultation?
								</h1>

								<p className="mt-2 text-sm text-gray-500 dark:text-gray-300">
									Lorem ipsum dolor sit amet consectetur
									adipisicing elit. Provident placeat,
									consequatur eveniet veritatis quos
									dignissimos beatae dolores exercitationem
									laboriosam officia magnam atque blanditiis
									illum doloremque magni ex corrupti tempora
									quis.
								</p>
							</div>
						</div>

						<div>
							<div className="inline-block p-3 text-white bg-blue-600 rounded-lg">
								<svg
									xmlns="http://www.w3.org/2000/svg"
									className="w-6 h-6"
									fill="none"
									viewBox="0 0 24 24"
									stroke="currentColor"
								>
									<path
										strokeLinecap="round"
										strokeLinejoin="round"
										strokeWidth="2"
										d="M8.228 9c.549-1.165 2.03-2 3.772-2 2.21 0 4 1.343 4 3 0 1.4-1.278 2.575-3.006 2.907-.542.104-.994.54-.994 1.093m0 3h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
									/>
								</svg>
							</div>

							<div>
								<h1 className="text-xl font-semibold text-gray-700 dark:text-white">
									What are your opening house?
								</h1>

								<p className="mt-2 text-sm text-gray-500 dark:text-gray-300">
									Lorem ipsum dolor sit amet consectetur
									adipisicing elit. Provident placeat,
									consequatur eveniet veritatis quos
									dignissimos beatae dolores exercitationem
									laboriosam officia magnam atque blanditiis
									illum doloremque magni ex corrupti tempora
									quis.
								</p>
							</div>
						</div>

						<div>
							<div className="inline-block p-3 text-white bg-blue-600 rounded-lg">
								<svg
									xmlns="http://www.w3.org/2000/svg"
									className="w-6 h-6"
									fill="none"
									viewBox="0 0 24 24"
									stroke="currentColor"
								>
									<path
										strokeLinecap="round"
										strokeLinejoin="round"
										strokeWidth="2"
										d="M8.228 9c.549-1.165 2.03-2 3.772-2 2.21 0 4 1.343 4 3 0 1.4-1.278 2.575-3.006 2.907-.542.104-.994.54-.994 1.093m0 3h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
									/>
								</svg>
							</div>

							<div>
								<h1 className="text-xl font-semibold text-gray-700 dark:text-white">
									Do i need a referral?
								</h1>

								<p className="mt-2 text-sm text-gray-500 dark:text-gray-300">
									Lorem ipsum dolor sit amet consectetur
									adipisicing elit. Provident placeat,
									consequatur eveniet veritatis quos
									dignissimos beatae dolores exercitationem
									laboriosam officia magnam atque blanditiis
									illum doloremque magni ex corrupti tempora
									quis.
								</p>
							</div>
						</div>

						<div>
							<div className="inline-block p-3 text-white bg-blue-600 rounded-lg">
								<svg
									xmlns="http://www.w3.org/2000/svg"
									className="w-6 h-6"
									fill="none"
									viewBox="0 0 24 24"
									stroke="currentColor"
								>
									<path
										strokeLinecap="round"
										strokeLinejoin="round"
										strokeWidth="2"
										d="M8.228 9c.549-1.165 2.03-2 3.772-2 2.21 0 4 1.343 4 3 0 1.4-1.278 2.575-3.006 2.907-.542.104-.994.54-.994 1.093m0 3h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
									/>
								</svg>
							</div>

							<div>
								<h1 className="text-xl font-semibold text-gray-700 dark:text-white">
									Is the cost of the appoinment covered by
									private health insurance?
								</h1>

								<p className="mt-2 text-sm text-gray-500 dark:text-gray-300">
									Lorem ipsum dolor sit amet consectetur
									adipisicing elit. Provident placeat,
									consequatur eveniet veritatis quos
									dignissimos beatae dolores exercitationem
									laboriosam officia magnam atque blanditiis
									illum doloremque magni ex corrupti tempora
									quis.
								</p>
							</div>
						</div>

						<div>
							<div className="inline-block p-3 text-white bg-blue-600 rounded-lg">
								<svg
									xmlns="http://www.w3.org/2000/svg"
									className="w-6 h-6"
									fill="none"
									viewBox="0 0 24 24"
									stroke="currentColor"
								>
									<path
										strokeLinecap="round"
										strokeLinejoin="round"
										strokeWidth="2"
										d="M8.228 9c.549-1.165 2.03-2 3.772-2 2.21 0 4 1.343 4 3 0 1.4-1.278 2.575-3.006 2.907-.542.104-.994.54-.994 1.093m0 3h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
									/>
								</svg>
							</div>

							<div>
								<h1 className="text-xl font-semibold text-gray-700 dark:text-white">
									What is your cancellation policy?
								</h1>

								<p className="mt-2 text-sm text-gray-500 dark:text-gray-300">
									Lorem ipsum dolor sit amet consectetur
									adipisicing elit. Provident placeat,
									consequatur eveniet veritatis quos
									dignissimos beatae dolores exercitationem
									laboriosam officia magnam atque blanditiis
									illum doloremque magni ex corrupti tempora
									quis.
								</p>
							</div>
						</div>

						<div>
							<div className="inline-block p-3 text-white bg-blue-600 rounded-lg">
								<svg
									xmlns="http://www.w3.org/2000/svg"
									className="w-6 h-6"
									fill="none"
									viewBox="0 0 24 24"
									stroke="currentColor"
								>
									<path
										strokeLinecap="round"
										strokeLinejoin="round"
										strokeWidth="2"
										d="M8.228 9c.549-1.165 2.03-2 3.772-2 2.21 0 4 1.343 4 3 0 1.4-1.278 2.575-3.006 2.907-.542.104-.994.54-.994 1.093m0 3h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
									/>
								</svg>
							</div>

							<div>
								<h1 className="text-xl font-semibold text-gray-700 dark:text-white">
									What are the parking and public transport
									options?
								</h1>

								<p className="mt-2 text-sm text-gray-500 dark:text-gray-300">
									Lorem ipsum dolor sit amet consectetur
									adipisicing elit. Provident placeat,
									consequatur eveniet veritatis quos
									dignissimos beatae dolores exercitationem
									laboriosam officia magnam atque blanditiis
									illum doloremque magni ex corrupti tempora
									quis.
								</p>
							</div>
						</div>
					</div>
				</div>
			</section>

			<footer className="bg-white px-6 mx-auto max-w-6xl">
				<div className="container px-6 py-12 mx-auto">
					<div className="grid grid-cols-1 gap-6 sm:grid-cols-2 sm:gap-y-10 lg:grid-cols-4">
						<div className="sm:col-span-2">
							<h1 className="max-w-lg text-xl font-semibold tracking-tight text-gray-800 xl:text-2xl dark:text-white">
								Subscribe our newsletter to get update.
							</h1>

							<div className="flex flex-col mx-auto mt-6 space-y-3 md:space-y-0 md:flex-row">
								<input
									id="email"
									type="text"
									className="px-4 py-2 text-gray-700 bg-white border rounded-md  dark:text-gray-300 dark:border-gray-600 focus:border-blue-400 dark:focus:border-blue-300 focus:outline-none focus:ring focus:ring-opacity-40 focus:ring-blue-300"
									placeholder="Email Address"
								/>

								<button className="w-full px-6 py-2.5 text-sm font-medium tracking-wider text-white transition-colors duration-300 transform md:w-auto md:mx-4 focus:outline-none bg-gray-800 rounded-lg hover:bg-gray-700 focus:ring focus:ring-gray-300 focus:ring-opacity-80">
									Subscribe
								</button>
							</div>
						</div>

						<div>
							<p className="font-semibold text-gray-800 dark:text-white">
								Quick Link
							</p>

							<div className="flex flex-col items-start mt-5 space-y-2">
								<a
									href="#"
									className="text-gray-600 transition-colors duration-300 dark:text-gray-300 dark:hover:text-blue-400 hover:underline hover:text-blue-500"
								>
									Home
								</a>
								<a
									href="#"
									className="text-gray-600 transition-colors duration-300 dark:text-gray-300 dark:hover:text-blue-400 hover:underline hover:text-blue-500"
								>
									Who We Are
								</a>
								<a
									href="#"
									className="text-gray-600 transition-colors duration-300 dark:text-gray-300 dark:hover:text-blue-400 hover:underline hover:text-blue-500"
								>
									Our Philosophy
								</a>
							</div>
						</div>

						<div>
							<p className="font-semibold text-gray-800 dark:text-white">
								Industries
							</p>

							<div className="flex flex-col items-start mt-5 space-y-2">
								<a
									href="#"
									className="text-gray-600 transition-colors duration-300 dark:text-gray-300 dark:hover:text-blue-400 hover:underline hover:text-blue-500"
								>
									Retail & E-Commerce
								</a>
								<a
									href="#"
									className="text-gray-600 transition-colors duration-300 dark:text-gray-300 dark:hover:text-blue-400 hover:underline hover:text-blue-500"
								>
									Information Technology
								</a>
								<a
									href="#"
									className="text-gray-600 transition-colors duration-300 dark:text-gray-300 dark:hover:text-blue-400 hover:underline hover:text-blue-500"
								>
									Finance & Insurance
								</a>
							</div>
						</div>
					</div>

					<hr className="my-6 border-gray-200 md:my-8 dark:border-gray-700" />

					<div className="flex items-center justify-between">
						<a href="#">
							<Image
								src={Logo}
								alt="Logo"
								height={24}
								width={120}
								className="w-auto h-7"
							/>
						</a>

						<div className="flex -mx-2">
							<a
								href="#"
								className="mx-2 text-gray-600 transition-colors duration-300 dark:text-gray-300 hover:text-blue-500 dark:hover:text-blue-400"
								aria-label="Reddit"
							>
								<svg
									className="w-5 h-5 fill-current"
									viewBox="0 0 24 24"
									fill="none"
									xmlns="http://www.w3.org/2000/svg"
								>
									<path d="M12 22C6.47715 22 2 17.5228 2 12C2 6.47715 6.47715 2 12 2C17.5228 2 22 6.47715 22 12C21.9939 17.5203 17.5203 21.9939 12 22ZM6.807 10.543C6.20862 10.5433 5.67102 10.9088 5.45054 11.465C5.23006 12.0213 5.37133 12.6558 5.807 13.066C5.92217 13.1751 6.05463 13.2643 6.199 13.33C6.18644 13.4761 6.18644 13.6229 6.199 13.769C6.199 16.009 8.814 17.831 12.028 17.831C15.242 17.831 17.858 16.009 17.858 13.769C17.8696 13.6229 17.8696 13.4761 17.858 13.33C18.4649 13.0351 18.786 12.3585 18.6305 11.7019C18.475 11.0453 17.8847 10.5844 17.21 10.593H17.157C16.7988 10.6062 16.458 10.7512 16.2 11C15.0625 10.2265 13.7252 9.79927 12.35 9.77L13 6.65L15.138 7.1C15.1931 7.60706 15.621 7.99141 16.131 7.992C16.1674 7.99196 16.2038 7.98995 16.24 7.986C16.7702 7.93278 17.1655 7.47314 17.1389 6.94094C17.1122 6.40873 16.6729 5.991 16.14 5.991C16.1022 5.99191 16.0645 5.99491 16.027 6C15.71 6.03367 15.4281 6.21641 15.268 6.492L12.82 6C12.7983 5.99535 12.7762 5.993 12.754 5.993C12.6094 5.99472 12.4851 6.09583 12.454 6.237L11.706 9.71C10.3138 9.7297 8.95795 10.157 7.806 10.939C7.53601 10.6839 7.17843 10.5422 6.807 10.543ZM12.18 16.524C12.124 16.524 12.067 16.524 12.011 16.524C11.955 16.524 11.898 16.524 11.842 16.524C11.0121 16.5208 10.2054 16.2497 9.542 15.751C9.49626 15.6958 9.47445 15.6246 9.4814 15.5533C9.48834 15.482 9.52348 15.4163 9.579 15.371C9.62737 15.3318 9.68771 15.3102 9.75 15.31C9.81233 15.31 9.87275 15.3315 9.921 15.371C10.4816 15.7818 11.159 16.0022 11.854 16C11.9027 16 11.9513 16 12 16C12.059 16 12.119 16 12.178 16C12.864 16.0011 13.5329 15.7863 14.09 15.386C14.1427 15.3322 14.2147 15.302 14.29 15.302C14.3653 15.302 14.4373 15.3322 14.49 15.386C14.5985 15.4981 14.5962 15.6767 14.485 15.786V15.746C13.8213 16.2481 13.0123 16.5208 12.18 16.523V16.524ZM14.307 14.08H14.291L14.299 14.041C13.8591 14.011 13.4994 13.6789 13.4343 13.2429C13.3691 12.8068 13.6162 12.3842 14.028 12.2269C14.4399 12.0697 14.9058 12.2202 15.1478 12.5887C15.3899 12.9572 15.3429 13.4445 15.035 13.76C14.856 13.9554 14.6059 14.0707 14.341 14.08H14.306H14.307ZM9.67 14C9.11772 14 8.67 13.5523 8.67 13C8.67 12.4477 9.11772 12 9.67 12C10.2223 12 10.67 12.4477 10.67 13C10.67 13.5523 10.2223 14 9.67 14Z"></path>
								</svg>
							</a>

							<a
								href="#"
								className="mx-2 text-gray-600 transition-colors duration-300 dark:text-gray-300 hover:text-blue-500 dark:hover:text-blue-400"
								aria-label="Facebook"
							>
								<svg
									className="w-5 h-5 fill-current"
									viewBox="0 0 24 24"
									fill="none"
									xmlns="http://www.w3.org/2000/svg"
								>
									<path d="M2.00195 12.002C2.00312 16.9214 5.58036 21.1101 10.439 21.881V14.892H7.90195V12.002H10.442V9.80204C10.3284 8.75958 10.6845 7.72064 11.4136 6.96698C12.1427 6.21332 13.1693 5.82306 14.215 5.90204C14.9655 5.91417 15.7141 5.98101 16.455 6.10205V8.56104H15.191C14.7558 8.50405 14.3183 8.64777 14.0017 8.95171C13.6851 9.25566 13.5237 9.68693 13.563 10.124V12.002H16.334L15.891 14.893H13.563V21.881C18.8174 21.0506 22.502 16.2518 21.9475 10.9611C21.3929 5.67041 16.7932 1.73997 11.4808 2.01722C6.16831 2.29447 2.0028 6.68235 2.00195 12.002Z"></path>
								</svg>
							</a>

							<a
								href="#"
								className="mx-2 text-gray-600 transition-colors duration-300 dark:text-gray-300 hover:text-blue-500 dark:hover:text-blue-400"
								aria-label="Github"
							>
								<svg
									className="w-5 h-5 fill-current"
									viewBox="0 0 24 24"
									fill="none"
									xmlns="http://www.w3.org/2000/svg"
								>
									<path d="M12.026 2C7.13295 1.99937 2.96183 5.54799 2.17842 10.3779C1.395 15.2079 4.23061 19.893 8.87302 21.439C9.37302 21.529 9.55202 21.222 9.55202 20.958C9.55202 20.721 9.54402 20.093 9.54102 19.258C6.76602 19.858 6.18002 17.92 6.18002 17.92C5.99733 17.317 5.60459 16.7993 5.07302 16.461C4.17302 15.842 5.14202 15.856 5.14202 15.856C5.78269 15.9438 6.34657 16.3235 6.66902 16.884C6.94195 17.3803 7.40177 17.747 7.94632 17.9026C8.49087 18.0583 9.07503 17.99 9.56902 17.713C9.61544 17.207 9.84055 16.7341 10.204 16.379C7.99002 16.128 5.66202 15.272 5.66202 11.449C5.64973 10.4602 6.01691 9.5043 6.68802 8.778C6.38437 7.91731 6.42013 6.97325 6.78802 6.138C6.78802 6.138 7.62502 5.869 9.53002 7.159C11.1639 6.71101 12.8882 6.71101 14.522 7.159C16.428 5.868 17.264 6.138 17.264 6.138C17.6336 6.97286 17.6694 7.91757 17.364 8.778C18.0376 9.50423 18.4045 10.4626 18.388 11.453C18.388 15.286 16.058 16.128 13.836 16.375C14.3153 16.8651 14.5612 17.5373 14.511 18.221C14.511 19.555 14.499 20.631 14.499 20.958C14.499 21.225 14.677 21.535 15.186 21.437C19.8265 19.8884 22.6591 15.203 21.874 10.3743C21.089 5.54565 16.9181 1.99888 12.026 2Z"></path>
								</svg>
							</a>
						</div>
					</div>
				</div>
			</footer>
		</main>
	);
}
