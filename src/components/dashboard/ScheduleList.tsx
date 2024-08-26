// ScheduleList.tsx

import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTimesCircle } from '@fortawesome/free-solid-svg-icons';
import styles from './ScheduleList.module.css';

interface Schedule {
    schedule_id: number;
    content: string;
    start_time: string;
    end_time: string;
}

interface ScheduleListProps {
    schedules: Schedule[];
    isTeacher?: boolean;
    onDeleteSchedule?: (schedule_id: number) => void; // 삭제 기능을 위한 prop 추가
}

const ScheduleList: React.FC<ScheduleListProps> = ({ schedules, isTeacher, onDeleteSchedule }) => {
    return (
        <div className={styles.container}>
            <h4>강의 일정</h4>
            <ul>
                {schedules.map((schedule, index) => (
                    <li key={schedule.schedule_id} className={styles.scheduleItem}>
                        <div className={styles.schedule}>
                            <div className={styles.scheduleBox}>
                                <span className={styles.scheduleItemNumber}>{`${index + 1}.`}</span>
                                <span className={styles.scheduleContent}>{`${schedule.content}`}</span>
                            </div>
                            <span>{`${schedule.start_time} - ${schedule.end_time}`}</span>
                            {isTeacher && onDeleteSchedule && (
                                <button
                                    className={styles.deleteButton}
                                    onClick={() => onDeleteSchedule(schedule.schedule_id)} // 삭제 버튼 클릭 시 동작
                                >
                                    <FontAwesomeIcon icon={faTimesCircle} />
                                </button>
                            )}
                        </div>
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default ScheduleList;
