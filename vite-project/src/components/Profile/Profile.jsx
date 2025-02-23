import styles from "./Profile.module.css";

const Profile = ({ name, tag, location, image, stats }) => {
  return (
    <div className={styles.container}>
      <div>
        <img className={styles.img} src={image} alt={`${name}'s image`} />
        <p className={styles.name}>{name}</p>
        <p className={styles.text}>{tag}</p>
        <p className={styles.text}>{location}</p>
      </div>

      <ul className={styles.statsList}>
        <li className={styles.statsItem}>
          <span>Followers</span>
          <span>{stats.followers}</span>
        </li>
        <li className={styles.statsItem}>
          <span>Views</span>
          <span>{stats.views}</span>
        </li>
        <li className={styles.statsItem}>
          <span>Likes</span>
          <span>{stats.likes}</span>
        </li>
      </ul>
    </div>
  );
};

export default Profile;