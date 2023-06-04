import React from 'react';
import { useEffect, useState } from 'react';
import { useRouter } from 'next/router';
import Link from 'next/link';
import { useSetRecoilState } from 'recoil';
import { CropImage } from '@Recoil/app';
import ColorImgSpinner from '@Components/Spinner/ColorImgSpinner';
import omctDb from '@Utils/omctDb';
import ROUTE_PATH from '@Constant/routePath';
import {
  $LandingWrap,
  $LandingTitleDiv,
  $LandingTitle,
  $TitleHighlight,
  $LandingSubTitle,
  $SpinnerWrapper,
  $LandingBottomDiv,
  $LandingUserCountDiv,
  $LangingStartButton,
  $AllTypesViewLink,
} from './style';

function LandingPage() {
  const router = useRouter();

  const [numberOfUsers, setNumberOfUsers] = useState(0);

  const setUserImg = useSetRecoilState(CropImage);

  useEffect(() => {
    const getNumberOfUsers = async () => {
      setNumberOfUsers(await omctDb.getNumberOfUsers());
    };

    getNumberOfUsers();
  }, []);

  useEffect(() => {
    setUserImg('');
  }, [setUserImg]);

  const onClickStartButton = () => {
    router.push(ROUTE_PATH.imageUpload);
  };

  return (
    <>
      <$LandingWrap>
        <$LandingTitleDiv>
          <$LandingTitle>
            오빠! <$TitleHighlight>톤</$TitleHighlight> 많아?
          </$LandingTitle>
          <$LandingSubTitle>퍼스널 컬러 자가진단</$LandingSubTitle>
        </$LandingTitleDiv>

        <$SpinnerWrapper>
          <ColorImgSpinner />
        </$SpinnerWrapper>

        <$LandingBottomDiv>
          {!!numberOfUsers && (
            <$LandingUserCountDiv>
              지금까지 {numberOfUsers.toLocaleString()}명이 진단했어요!
            </$LandingUserCountDiv>
          )}
          <$LangingStartButton onClick={onClickStartButton}>
            시작하기
          </$LangingStartButton>

          <Link href={ROUTE_PATH.allTypesView}>
            <$AllTypesViewLink>퍼스널 컬러 유형 전체보기</$AllTypesViewLink>
          </Link>
        </$LandingBottomDiv>
      </$LandingWrap>
    </>
  );
}

export default LandingPage;
