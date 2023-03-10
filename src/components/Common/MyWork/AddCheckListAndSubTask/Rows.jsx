import React from "react";
import {Stack} from "@mui/material";
import classes from "./Rows.module.css";
import trashIcon from "../../../../Images/Bearish/trash.svg";
import BottomMenu from "./ButtomMenu/BottomMenu";

const Rows = (props) => {
    const {handleRowInput, handleAddRow, handleDeleteRow, item, index} = props;
    return (
        <>
            <Stack gap={'12px'}>
                <Stack direction={'row'} gap={1} alignItems={'center'}>
                    <Stack className={classes.rowSquareBox}/>
                    <Stack className={classes.rowInputBox}>
                        <Stack className={classes.childBox}>
                            <input
                                placeholder={'Type your task here…'}
                                className={classes.rowInput}
                                type={'text'}
                                value={item?.value || ''}
                                onChange={({target}) => handleRowInput(target.value, index)}/>
                            <img
                                onClick={() => handleDeleteRow(index)}
                                className={classes.deleteIcon}
                                src={trashIcon}
                                alt={''}/>
                        </Stack>
                    </Stack>
                </Stack>
                <BottomMenu handleAddRow={handleAddRow}/>
            </Stack>
        </>
    )
};
export default Rows;