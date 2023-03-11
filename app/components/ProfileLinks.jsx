



  export default function ProfileLinks ({links}) {



    return (
        <>
        <ul className="profile-links">
        {links.map((link, index) => (
            <li key={index}>
            <a href={link.link_url} rel="noreferrer" target="_blank">{link.link_title}</a>
            </li>
             ))}
        </ul>
        </>
    );
  }