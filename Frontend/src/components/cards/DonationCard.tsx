import React from 'react';
import styles from "./DonationCard.module.css";
import { DonationData } from '../../models/donatecard';
import { useState,useEffect } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faStar } from "@fortawesome/free-solid-svg-icons";
import { IconProp } from '@fortawesome/fontawesome-svg-core';
import axios from 'axios';

interface Props {
    data: DonationData; 
};


const DonationCard: React.FC<Props> = ({ data }) => {
    const [curValue, setCurValue] = useState(0);
    const [curMoney, setCurMoney] = useState(0);
    const [percentage, setPercentage] =useState(data.fundraisingAmountRaised / data.fundraisingAmountGoal * 100);
    const [demicalDay, setDemicalDay] = useState(Math.floor((data.fundraisingEndTime-
        new Date().getTime())/(3600*24*1000)));
    const [goalMoney, setGoalMoney] =useState(data.fundraisingAmountRaised)



    useEffect(() => {
        const intervalIdPercent = setInterval(() => {
            if (curValue < percentage) setCurValue(curValue => curValue + 1);
        }, 10);
        
        return () => clearInterval(intervalIdPercent);
    }, [curValue]);

    useEffect(() => {
        const intervalIdMoney = setInterval(() => {
            if (curMoney < goalMoney) {
                setCurMoney(curMoney => curMoney + 14124);
            } else {
                setCurMoney(goalMoney)
            }
        }, 0.05);

        return () => clearInterval(intervalIdMoney);
    }, [curMoney]);

    // 북마크 설정
    const [isMark, setIsMark]= useState(data.fundraisingBookmarked);

    const bookHandler = ()=>{
        setIsMark(!isMark)
        axios.post("/bookmarks",{
            "memberId": 1,
            "fundraisingId": data.fundraisingId,
        }).then(res=> console.log(res)
        )
    }

    useEffect(()=>{
        
    },[setIsMark])

    return (
        <div className={styles.DonationCard} style={{ background: `linear-gradient(to top, rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0)), url(${data.fundraisingThumbnail})`, backgroundSize: "cover" }}>
            <div className={styles.bookmark}> <FontAwesomeIcon onClick={bookHandler} icon={faStar as IconProp} color={ !isMark ?'grey':"yellow"} /></div>
            
            <div className={styles.dona_box}>
                
                <div className={styles.dona_type}>{data.categoryName}</div>
                <div className={styles.dona_title}>{data.fundraisingTitle}</div>
                <div className={styles.dona_hospital}>{"서울아산병원"}</div>
                <div className={styles.dona_deadline}>D-{demicalDay+1}</div>
                <div className={styles.progress_box}>
                    <progress value={curValue} max={100} />

                    <div className={styles.money_percent} >
                        <div className={styles.dona_curmoney}>{curMoney.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',')}원</div>
                        <div className={styles.dona_curpercen}>{curValue}%</div>
                    </div>

                </div>

            </div>
        </div>
    );
};

export default DonationCard;
