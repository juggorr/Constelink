import React, { useRef, useEffect } from 'react';
import styles from './NoticePage.module.css';
import Pagination from "react-js-pagination";
import { useState } from 'react';
import axios from 'axios';

import SunEditor from 'suneditor-react';
import 'suneditor/dist/css/suneditor.min.css';
const NoticePage: React.FC = () => {

    const selectRef = useRef<HTMLSelectElement>(null);
    const inputRef = useRef<HTMLInputElement>(null);
    const [fixedType, setFixedType] = useState(false);
    const [content, setContent] = useState('');

    const handleEditorChange = (value: string) => {
        setContent(value);
    };
    const handleClick = () => {
        // api 설정 예정
        const selectedValue = selectRef.current?.value;
        const inputValue = inputRef.current?.value;
        const fixed = fixedType;
        const contents = content;

        axios.post("")
    };
    const contentChangeHandler = (e: string) => {
        console.log(e);

    }

    return (
        <div className={styles.NoticePage}>

            <header className={styles.notice_title}>공지사항</header>

            {/* 공지사항 리스트 페이지 */}
            {/* <section className={styles.notice_section}  >
                <ul className={styles.notice_list}>
                    {[1, 2, 3, 4, 5, 6, 7, 8].map(it => <li className={styles.notice_item}>
                        <div className={styles.item_nav}>
                            <div className={styles.nav_num}>1</div>

                            { "type" ?  <div className={styles.nav_type1}>긴급공지</div>:  <div className={styles.nav_type2}>바보공지</div> }
                           
                            <div className={styles.nav_title}>[시스템수정안내] 사용자 정보수정 기능 업데이트 안내</div>
                        </div>

                        <div className={styles.item_date}>
                            <div>2023.01.12 오후 4:00</div>
                        </div>
                    </li>)}
                </ul>
            </section> */}

            {/* 공지사항 작성페이지 */}
            {/* <section className={styles.write_section} >

                <div className={styles.write_title}>
                    <input type="text" className={styles.write_input} placeholder={"제목"} ref={inputRef} />
                </div>

                <div className={styles.write_category}>
                    <div className={styles.category_select}>
                        <div>카테고리 분류</div>
                        <label htmlFor="types" />
                        <select ref={selectRef} name="types">
                            <option value="1">일반 공지</option>
                            <option value="2">긴급 공지</option>
                        </select>
                    </div>

                    <div className={styles.category_fixed} >
                        <div>상단고정</div>
                        <input className={!fixedType? styles.fbtn: styles.fbtnOn } type="button" value={fixedType?"on":"off"} onClick={() => setFixedType(!fixedType)} />
                    </div>
                </div>


                <div className={styles.write_category}>
                    <div>글작성</div>
                </div>

                <div className={styles.write_content}>
                    <SunEditor
                        lang="en"
                        width="920px"
                        height="400px"
                        autoFocus={false}
                        onChange={contentChangeHandler}
                        setDefaultStyle="font-family:Hahmlet;color:darkgrey;font-size: 20px;"
                        placeholder="환자의 치료일지를 적어주세요"
                        setOptions={{
                            buttonList: [
                                [
                                    "bold",
                                    "underline",
                                    "table",
                                    "image",
                                    "video",
                                    "audio",
                                    "italic",
                                    "fontSize",
                                    "formatBlock",
                                    "list",
                                    "fontColor"
                                ]
                            ]
                        }}
                    />
                </div>
            </section>

            <div className={styles.write_finish} >
            <button className={styles.write_btn} onClick={handleClick}>공지사항 작성</button>
            </div><a href='http://j8a206.p.ssafy.io:8997/oauth2/authorization/kakao'>ddd</a> */}


            <section className={styles.board_detail}>
                <header className={styles.detail_title}>일반공지 [시스템 수정안내] 사용자 정보수정 기능 업데이트      2023-01-12 오후 4:01</header>
                <div className={styles.detail_content} >

                    ${'<div>ddd<div/>'}
                </div>

            </section>
        </div>
    );
};

export default NoticePage;