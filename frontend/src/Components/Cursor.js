import React from 'react';
import {useState} from 'react'
import { clockCursor, emojiCursor, fairyDustCursor, followingDotCursor, rainbowCursor, trailingCursor } from "cursor-effects";
const Cursor = () => {


    const cursors = ['origin', 'emoji', 'clock', 'fairy', 'Dot', 'color', 'trail']

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
            case 'emoji':
                setCursorEffect(new emojiCursor({ emoji: ["😀", "😂", "😆", "😊"] }))
            break
            case 'clock':
                setCursorEffect(new clockCursor({ time: Date.today}))
            break
            case 'fairy':
                setCursorEffect(new fairyDustCursor({ height: 10}))
            break
            case 'Dot':
                setCursorEffect(new followingDotCursor({ height: 10}))
            break
            case 'color':
                setCursorEffect(new rainbowCursor({colors: ["red","orange", "yellow", "green", "blue", "violet", "purple"]},{length: 10}))
            break
            case 'trail':
                setCursorEffect(new trailingCursor({length: 10}))
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
