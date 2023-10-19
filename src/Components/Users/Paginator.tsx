
import React from "react";
import styles from "./Users.module.css";


type propsType = {
    totalUserCount:  number
    pageSize: number
    currentPage: number
    onPageChanged: (p: number)=> void
}

export const Paginator = ({ totalUserCount, pageSize,currentPage, onPageChanged}:propsType) => {
    let pagesCount = Math.ceil(totalUserCount / pageSize)
    let pages = []
    for (let i = 1; i <= pagesCount; i++) {pages.push(i)}
    return (
        <>
        {pages.map((p) => {
                return <span className={currentPage === p ? styles.selectedPage : ''}
                             onClick={() => {onPageChanged(p)}}>{p}</span>
            })}
        </>
    )
}