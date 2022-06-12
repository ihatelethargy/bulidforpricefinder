import React, { useState } from "react";
import axios from "axios";
import "./DetailBody.css";
import { faSearch } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Spinner, Badge, Card } from "reactstrap";
const item_list = [
    {id:0, data: '바닥가격'},
    {id:1, data: '발행 NFT 수량'},
    {id:2, data: '소유자 수'},
    {id:3, data: '금일 평균 거래 가격'},
    {id:4, data: '전체 거래량'},
];
const value_list = [
    {id:0, value:0},
    {id:1, value:1},
    {id:2, value:2},
    {id:3, value:3},
    {id:4, value:4}
];


function DetailBody() {
    const [projectInputValue, setProjectInputValue] = useState("");
    const [projectInfo, setProjectInfo] = useState();
    const [loading, setLoading] = useState(false);
    const [checkedList, setCheckedList] =useState([]);
    const onCheckedElement = (checked,item) =>{
        if (checked){
            setCheckedList([...checkedList,item]);
        }else if(!checked){
            setCheckedList(checkedList.filter(el => el !==item));
        }
    };
    const onCheckedAll = (checked) => {
        if(checked){
            const checkedListArray = [];
            item_list.forEach((list)=>checkedListArray.push(list));
            setCheckedList(checkedListArray);
        }
        else{
            setCheckedList([]);
        }
    };
    

    const fetchPriceInfo = () => {
        setLoading(true);
        if (projectInputValue) {
            axios
                .get(
                    `https://api.opensea.io/api/v1/collection/${projectInputValue}/stats`
                )
                .then((res) => {
                    setProjectInfo(res.data.stats);
                    value_list[0].value = projectInfo.floor_price;
                    value_list[1].value =projectInfo.count;
                    value_list[2].value =projectInfo.num_owners;
                    value_list[3].value =projectInfo.one_day_average_price.toFixed(1);
                    value_list[4].value =projectInfo.total_volume.toFixed(1);
                    setLoading(false);
                });
        } else {
            return false;
        }
        
    };
    return (
        <div className="DetailBody">
            <div className="search">
                <div className="explain">
                    <div className="explainText">
                        <span>프로젝트명을 입력하세요.</span>
                    </div>
                </div>
                <div className="form__group field">
                    <input
                        type="input"
                        className="form__field"
                        placeholder="search"
                        name="search"
                        id="search"
                        onChange={(e) =>
                            setProjectInputValue(e.currentTarget.value)
                        }
                        required
                    />
                    <label for="search" className="form__label">
                        Search
                    </label>

                    <FontAwesomeIcon
                        icon={faSearch}
                        size="2x"
                        onClick={fetchPriceInfo}
                    />
                </div>
            </div>
            <div className="message">{checkedList.length === 0 && ('보고 싶은 데이터를 체크해주세요')}
                <div className="checklist">
                    <label className="item_label">
                        <input
                         type = "checkbox"
                         checked={(checkedList.length !== 0 || checkedList.length !== item_list.length ) ? false : true } 
                        onChange={(e)=>onCheckedAll(e.target.checked)}>
                        </input> 전체선택
                    </label>
                    {item_list.map((item) => (
                        <label className="item_label">
                            <input
                            key={item.id} type = "checkbox" value={item.data}
                            onChange={(e)=> onCheckedElement(e.target.checked,item)}
                            checked={checkedList.includes(item)?true:false}>
                                </input> {item.data}
                        </label>
                    )
                    )}
                </div>
            </div>

            {!projectInfo && (
            <div className="projectInfoBoxWrapper">
                <div className="projectBox">
                    <div className="projectBoxItem">
                        <Badge
                            size="lg"
                            className="badge"
                            pill
                            color="secondary"
                        >
                            바닥가격
                        </Badge>
                        <span>
                                NFT 등급 중 가장 낮은 수준으로 올라와 있는 가격
                        </span>
                    </div>
                    <div className="projectBoxItem">
                        <Badge
                            size="lg"
                            className="badge"
                            pill
                            color="secondary"
                        >
                            발행 NFT 수량
                        </Badge>
                        <span>
                            발행 가능한 NFT의 수량
                        </span>
                    </div>
                    <div className="projectBoxItem">
                        <Badge
                            size="lg"
                            className="badge"
                            pill
                            color="secondary"
                        >
                            소유자 수
                        </Badge>
                        <span>
                            해당 NFT의 소유자의 수
                        </span>
                    </div>
                    <div className="projectBoxItem">
                        <Badge
                            size="lg"
                            className="badge"
                            pill
                            color="secondary"
                        >
                            금일 평균 거래 가격
                        </Badge>
                        <span>
                            오늘 날짜의 해당 NFT의 평균 거래 가격
                        </span>
                    </div>
                    <div className="projectBoxItem">
                        <Badge
                            size="lg"
                            className="badge"
                            pill
                            color="secondary"
                        >
                            전체 거래량
                        </Badge>
                        <span>
                            해당 NFT의 전체 거래량
                        </span>
                    </div>
                </div>
            </div>
            )}
            {projectInfo&&(
            <div className="projectInfoBoxWrapper">
                {loading && <Spinner />}
                    <div className="projectBox">
                    {item_list.map((item) => (
                        <div className={ checkedList.includes(item) ? "projectBoxItem" : "display_none"}>
                            <Badge
                                size="lg"
                                className="badge"
                                pill
                                color="primary"
                            >
                                {item.data}
                            </Badge>
                            <span className="badgeValue">
                                {value_list[item.id].value}
                            </span>
                        </div>
                        ))}
                        </div>
                    </div>
                    )}
            </div>
    );
}

export default DetailBody;