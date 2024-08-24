import React from 'react';
import { useNavigate } from 'react-router-dom';
import styles from './LectureCard.module.css';

interface LectureCardProps {
  classId: number;
  name: string;
  bannerImage: string;
  instructor: string;
  category: string;
}

const LectureCard: React.FC<LectureCardProps> = ({ classId, bannerImage, name, instructor, category }) => {
  const navigate = useNavigate();

  const handleClick = () => {
    navigate(`/lecture/info?id=${classId}`);
  };

  return (
    <div className={styles.card} onClick={handleClick}>
      <div className={styles.banner} style={{ backgroundImage: `url(${bannerImage})` }}></div>
      <h2 className={styles.title}>{name}</h2>
      <p className={styles.details}>
        {instructor} | {category}
      </p>
    </div>
  );
};

export default LectureCard;