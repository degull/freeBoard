import React from 'react';
import { gql, useQuery } from '@apollo/client'
import { Wrapper, CardWrapper,Header, AvatarWrapper, Avatar, Writer, Info, CreatedAt, Body, Title, Contents, BottomWrapper, Button } from '../../../styles/emotion-details'
import { useRouter } from 'next/router';

export const FETCH_BOARD = gql`
  query fetchBoard($boardId: ID!) {
    fetchBoard(boardId: $boardId) {
      _id
      writer
      title
      contents
      createdAt
    }
  }
`;

export default function BoardDetailPage(){

   const router = useRouter()
   
   const { data } = useQuery(FETCH_BOARD, {
      variables : { boardId : router.query.boardId }
   });

   return (
      <>
         <Wrapper>
            <CardWrapper>
               <Header>
                  <AvatarWrapper>
                     <Avatar src="/img/avatar.png"/>
                     <Info>
                        <Writer>{data?.fetchBoard?.writer}</Writer>
                        <CreatedAt>
                           {data?.fetchBoard?.createdAt}
                        </CreatedAt>
                     </Info>
                  </AvatarWrapper>         
               </Header>
               <Body>
                  <Title>{data?.fetchBoard?.title}</Title>
                  <Contents>{data?.fetchBoard?.contents}</Contents>
               </Body>
            </CardWrapper>
            <BottomWrapper>
               <Button>목록으로</Button>
               <Button>수정하기</Button>
               <Button>삭제하기</Button>
            </BottomWrapper>
         </Wrapper>
      </>
   );
};

