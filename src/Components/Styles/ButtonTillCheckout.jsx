import styled from "styled-components";

const Button_LoginToPrime = styled.button`
    width: 263px;
    height: 50px;
    background: #0f79af;
    margin-top: 47px;
    text-align: center;
    font-family: 'Roboto', sans-serif;
    font-style: normal;
    font-weight: 500;
    font-size: 16px;
    line-height: 150%;
    border: none;
    color: #ffffff;

    & > a {
        color: #ffffff;
    }

    &:hover {
        background: #00a8e1;
        color: #ffffff;
        cursor: pointer;
    }
`;

const Button_getStarted = styled.button`
    width: 259px;
    height: 48px;
    background: #0f79af;
    border-radius:4px;
    ${'' /* padding:20px 0; */}
    font-family: 'Roboto',sans-serif;
    font-style: normal;
    font-weight: 500;
    font-size: 16px;
    line-height: 150%;
    border: none;
    color: #ffffff;

    & > a {
        color: #ffffff;
    }

    &:hover {
        background: #00a8e1;
        color: #ffffff;
    }
`;

const Button_getPrimePerMonth = styled.button`
    width: 259px;
    height: 48px;
    background: #0f79af;
    border-radius: 4px;

    font-family: 'Roboto', sans-serif;
    font-style: normal;
    font-weight: 500;
    font-size: 16px;
    line-height: 150%;
    border: none;
    color: #ffffff;

    & > a {
        color: #ffffff;
    }

    &:hover {
        background: #00a8e1;
        color: #ffffff;
    }
`;

const Button_continueAtPayment = styled.button`
    width: 200px;
    height: 48px;
    background: #0f79af;
    border-radius: 4px;

    font-family: 'Roboto', sans-serif;
    font-style: normal;
    font-weight: 500;
    font-size: 16px;
    line-height: 150%;
    border: none;
    color: #ffffff;

    & > a {
        color: #ffffff;
    }

    &:hover {
        background: #00a8e1;
        color: #ffffff;
    }
`;

const Button_watchNow = styled.button`
    width: 131px;
    height: 41px;
    background: #0f79af;
    border-radius: 4px;

    font-family: 'Roboto', sans-serif;
    font-style: normal;
    font-size: 14px;
    line-height: 150%;
    border: none;
    color: #ffffff;

    & > a {
        color: #ffffff;
    }

    &:hover {
        background: #00a8e1;
        color: #ffffff;
    }
`;

const Button_Play = styled.button`
    width: 87px;
    height: 41px;
    background: #0f79af;

    font-family: 'Roboto', sans-serif;
    font-style: normal;
    font-size: 14px;
    border: none;
    color: #ffffff;

    & > a {
        color: #ffffff;
    }

    &:hover {
        background: #00a8e1;
        color: #ffffff;
    }
`;

const Button_playSignOnlyRound = styled.button`
    width: 40px;
    height: 40px;
    background: #252e39;
    border-radius: 50%;
    border: none;
    color: #ffffff;

    & > a {
        color: #ffffff;
    }

    &:hover {
        background: #4b5c70;
        color: #ffffff;
    }
`;

export {
    Button_LoginToPrime,
    Button_getStarted,
    Button_getPrimePerMonth,
    Button_continueAtPayment,
    Button_watchNow,
    Button_Play,
    Button_playSignOnlyRound,
};
