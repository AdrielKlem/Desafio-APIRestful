import styled from "styled-components"
import { Link } from 'react-router-dom'

export const Container = styled.header`
    grid-area: header;
    height: 105px;
    width: 100%;
    
    background-color: ${({ theme }) => theme.COLORS.BACKGROUND_500};
    border-bottom: 1px solid ${({ theme }) => theme.COLORS.BACKGROUND_500};

    display: flex;
    align-items: center;
    justify-content: space-between;
    gap: 64px;
    
    padding: 0 124px;

    /* position: fixed;
    top: 0;
    flex: 1;
    z-index: 1; */
`

export const Profile = styled(Link)`
    display: flex;
    align-items: center;
    gap: 8px;

    > img {
        width: 64px;
        height: 64px;
        border-radius: 50%;
    }

    > div {
       display: flex;
        flex-direction: row-reverse;
        line-height: 24px;
        width: 100px;
        flex-wrap: wrap;

        span {
            font-size: 14px;
            color: ${({ theme }) => theme.COLORS.GRAY_100};
        }

        strong {
            font-size: 14px;
            color: ${({ theme }) => theme.COLORS.WHITE};
        }
    }
`

export const Brand = styled.div`
    color: ${({ theme }) => theme.COLORS.PINK};
`