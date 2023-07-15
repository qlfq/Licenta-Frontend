import React from 'react'
import {StyleSheet, Text} from "react-native";
import {mainTextColor} from "../../../constants/colors";
import {RenderIf} from "./render-if";
import {useUserId} from "./hooks/use-user-id";

type Props = {
    username: string,
    messageUserId: number,
}

export const Username = ({ username, messageUserId }: Props) => {
    const userId = useUserId()

    return <RenderIf condition={userId !== messageUserId}>
        <Text style={styles.text}>
            {username}
        </Text>
    </RenderIf>
}

const styles = StyleSheet.create<any>({
    text: {
        fontFamily: 'sono',
        fontSize: 16,
        color: mainTextColor,
        textAlign: 'right',
        marginRight: 15,
    }
})