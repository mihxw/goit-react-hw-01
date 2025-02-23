import clsx from "clsx";
import styles from "./FriendListItem.module.css";

const FriendListItem = ({ avatar, name, isOnline }) => {
  return (
    <div className={styles.item}>
      <img src={avatar} alt={name} width="48" />
      <p className={styles.name}>{name}</p>

      <p
        className={clsx(
          styles.status,
          isOnline ? styles.online : styles.offline
        )}
      >
        Status: {isOnline ? "Online" : "Offline"}
      </p>
    </div>
  );
};

export default FriendListItem;