import React from "react";
import Search from "../../components/shared/search-area/Search";
import Header from "../../components/shared/header/Header";
import Hero from "../../components/shared/hero/Hero";
import Container from "../../components/layout/Container";
import Card from "../../components/common/card/Card";
import Heading from "../../components/common/card/Heading";
import ViewMore from "../../components/common/card/ViewMore";
import { data } from "../../assets/data/dummy";

const Home = () => {
	const { videos, featuredJams, jams, games } = data;

	return (
		<div className="home">
			<div className="bg-primary-semi">
				<Header />
			</div>
			<div className="w-full bg-primary-bold py-5">
				<Search />
			</div>
			<Hero videoSrc={videos[0]} />
			<div className="bg-primary-bold">
				<Container className="py-16">
					{/* FEATURE JAMS */}
					<div className="feature-jams py-5">
						<Heading title="FEATURE JAMS" />
						<div className="card-container">
							{featuredJams?.map((ft) => (
								<Card
									src={ft.thumbnailImageUrl}
									size={{
										width: 300,
										height: 150,
									}}
									alt={ft.name}
									title={ft.name}
									type={"jams"}
									tag={"ABC"}
									statistic={{
										days: 14,
										hours: 12,
										joined: ft.joinedCount,
										submissions: ft.submissionCount,
									}}
								/>
							))}
						</div>
						<div className="view-more-btn">
							<ViewMore />
						</div>
					</div>

					{/* FEATURE GAMES */}
					<div className="feature-games py-5">
						<Heading title="FEATURE GAMES" />
						<div className="card-container">
							{games?.map((ft) => (
								<Card
									src={ft.thumbnailImageUrl || "https://picsum.photos/300/300"}
									size={{
										width: 300,
										height: 150,
									}}
									alt={ft.name}
									title={ft.name}
									type={"games"}
									tag={ft.genre}
									desc={ft.description}
								/>
							))}
						</div>
						<div className="view-more-btn">
							<ViewMore />
						</div>
					</div>
				</Container>
			</div>
		</div>
	);
};

export default Home;
