import axios from "axios";
import { useEffect, useState } from "react";
import Pagination from "react-js-pagination";
import { useLocation, useNavigate } from "react-router-dom";
import HosBeneficiaryCard from "../components/cards/HosBeneficiaryCard";
import { HosBenInfo } from "../models/hospitalmodels";
import styles from "./HosBenList.module.css";


const HosBenList= () => {

  const navigator = useNavigate();
  const location = useLocation();

  const [fundraisingData, setFundraisingData] = useState<HosBenInfo[]>();
  const [page, setPage] = useState(1);
  const [hospitalId, setHospitalId] = useState(3);
  const size:number = 8;
  const [totalElements, setTotalElements] = useState(0);
  const URL_PATH : string = "/beneficiaries/hospital/";
  const handlePageChange = (page:number) => {
    setPage(page);
    window.scrollTo(0,0);
  }

  useEffect(() => {
    axios.get(URL_PATH+hospitalId, {params : {page, size}}).then((res) => {
      setFundraisingData(res.data.content);
      setTotalElements(res.data.totalElements)
     })
   }
   , [page]);



  return(

    <div className={styles.mainWrapper}>
        <div className={styles.mainTitle}>수혜자 목록</div>
        <div className={`${styles.subtitle_box} ${styles.grid_col_8}`}>
          <li>사진</li>
          <li>이름</li>
          <li>출생일자</li>
          <li>병명</li>
          <li>금액 현황</li>
          <li>현황</li>
          <li></li>
          <li></li>
        </div>
        <div className={`${styles.grid_row_8} ${styles.pd_top_10}`}>
            {fundraisingData?.map(data => 
              <HosBeneficiaryCard key={`fundraising-${data.beneficiaryId}`} data={data}/>
             )}

        </div>
        <div className={styles.sticky_pagenation_box}>
          <Pagination
            activePage={page}
            itemsCountPerPage={size}
            totalItemsCount={totalElements}
            pageRangeDisplayed={size}
            prevPageText={"‹"}
            nextPageText={"›"}
            onChange={handlePageChange}
          />
        </div>
    </div>
  );
}

export default HosBenList;