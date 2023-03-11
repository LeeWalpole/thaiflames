import Carousel from "../components/Carousel";
import FeedHeader from "../components/FeedHeader";
import FeedFooter from "../components/FeedFooter";

async function getProfiles() {
  const res = await fetch(
    "https://www.thaiflames.app/backend/wp-json/data/v1/profiles/"
  );

  // Recommendation: handle errors
  if (!res.ok) {
    // This will activate the closest `error.js` Error Boundary
    throw new Error("Failed to fetch data");
  }
  return res.json();
}

export default async function Profiles() {
  const profiles = await getProfiles();

  return (
    <>
      <div className="feed">
        {profiles.map((profile) => (
          <div key={profile.username} className="feedItem">
            <FeedHeader
              id={profile.id}
              username={profile.username}
              display_name={profile.display_name}
              bio_mini={profile.bio_mini}
              avatar_url={profile.avatar_url}
            />
            <Carousel images={profile.gallery} />
            <FeedFooter
              id={profile.id}
              username={profile.username}
              display_name={profile.display_name}
              bio_mini={profile.bio_mini}
              avatar_url={profile.avatar_url}
            />
          </div>
        ))}
      </div>
    </>
  );
}
