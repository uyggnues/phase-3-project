import React from 'react';
import {useState} from 'react'
import { clockCursor, emojiCursor, fairyDustCursor, followingDotCursor, rainbowCursor } from "cursor-effects";
const Cursor = () => {


    const cursors = ['defaultCursor', 'emojiCursor', 'clockCursor', 'fairyDustCursor', 'followingDotCursor', 'rainbowCursor']

    const mappedCursors = cursors.map((cursor) => {
            return <button className="cursorButton" key={cursor} onClick={() => switchCursor(cursor)}>{cursor}</button>
    })
// console.log( new emojiCursor({ emoji: ["😀", "😂", "😆", "😊"] }))
    const [cursor, setCursor] = useState("")
    const [cursorEffect, setCursorEffect] = useState("")
   
    const switchCursor = (cursor) => {
        if (cursorEffect !== "") {
            cursorEffect.destroy()
            // debugger
        }
        setCursor(cursor)
        switch (cursor) {
            case 'emojiCursor':
                setCursorEffect(new emojiCursor({ emoji: ["😀", "😂", "😆", "😊"] }))
            break
            case 'clockCursor':
                setCursorEffect(new clockCursor({ time: Date.today}))
            break
            case 'fairyDustCursor':
                setCursorEffect(new fairyDustCursor({ height: 10}))
            break
            case 'followingDotCursor':
                setCursorEffect(new followingDotCursor({ height: 10}))
            break
            case 'rainbowCursor':
                setCursorEffect(new rainbowCursor({colors: ["red","orange", "yellow", "green", "blue", "violet", "purple"]},{length: 10}))
            break
            default:
                setCursorEffect("")
            }
        }



    return (
        <div className='cursor'>
            {mappedCursors}
        </div>
    );
}

export default Cursor;
