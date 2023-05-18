import { 
   Wrapper,
   Title,
   WriterWrapper,
   InputWrapper,
   Label,
   Writer,
   Password,
   Subject,
   Contents,
   ZipcodeWrapper,
   Zipcode,
   SearchButton,
   Address,
   Youtube,
   ImageWrapper,
   UploadButton,
   OptionWrapper,
   RadioButton,
   RadioLabel,
   ButtonWrapper,
   SubmitButton,
   CancelButton,
   Error
 } from '../../../styles/emotion.js';
import React from 'react';
import { useState } from 'react';

export default function BoardWriteUI(){

   /* 상태관리 */
   const [writer, setWriter] = useState("");
   const [password, setpassword] = useState("");
   const [title, setTitle] = useState("");
   const [contents, setContents] = useState("");


   /* 에러처리 */
   const [writerError, setWriterError] = useState("");
   const [passwordError, setpasswordError] = useState("");
   const [titleError, setTitleError] = useState("");
   const [contentsError, setContentsError] = useState("");

   /* 작성자 */
   const onChangeWriter = (e) => {
      setWriter(e.target.value);
      if (e.target.value !== "") {  // 첫번째 에러 처리 후 글이 채워졌다면 에러 지우기
         setWriterError("")
      }
   };


   /* 비밀번호 */
   const onChangePassword = (e) => {
      setpassword(e.target.value);
      if (e.target.value !== ""){
         setpasswordError("")
      }
   };


   /* 제목 */
   const onChangeTitle = (e) => {
      setTitle(e.target.value);
      if (e.target.value !== ""){
         setTitleError("");
      }
   }

   /* 내용 */
   const onChangeContents = (e) => {
      setContents(e.target.value);
      if (e.target.value !== ""){
         setContentsError("");
      }
   }




   const onClickSubmit = () => {
      if (!writer){
         setWriterError("작성자를 입력해주세요.")
      }
      if (!password) {
         setpasswordError("비밀번호를 입력해주세요.")
      }
      if (!title) {
         setTitleError("제목을 입력해주세요.")
      }
      if (!contents){
         setContentsError("내용을 입력해주세요.")
      }
      
      if (writer && password && title && contents) {
         //Backend 통신 API
         alert("게시글이 등록되었습니다.");
      }
   }






   return (
      <Wrapper>
         <Title>게시글 등록</Title>
         <WriterWrapper>
            <InputWrapper>
               <Label>작성자</Label>
               <Writer type="text" placeholder="이름을 적어주세요" onChange={onChangeWriter}/>
               <Error>{writerError}</Error>
            </InputWrapper>
            <InputWrapper>
               <Label>비밀번호</Label>
               <Password type='password' placeholder='비밀번호를 입력해주세요.' onChange={onChangePassword} />
               <Error>{passwordError}</Error>
            </InputWrapper>
         </WriterWrapper>
         <InputWrapper>
            <Label>제목</Label>
            <Subject type='text' placeholder='제목을 작성해주세요.' onChange={onChangeTitle}/>
            <Error>{titleError}</Error>
         </InputWrapper>
         <InputWrapper>
            <Label>내용</Label>
            <Contents type='text' placeholder='내용을 작성해주세요' onChange={onChangeContents}/>
            <Error>{contentsError}</Error>
         </InputWrapper>
         <InputWrapper>
            <Label>주소</Label>
            <ZipcodeWrapper>
               <Zipcode placeholder='06567' />
               <SearchButton>우편번호 검색</SearchButton>
            </ZipcodeWrapper>
            <Address/>
            <Address/>
         </InputWrapper>
         <InputWrapper>
            <Label>유튜브</Label>
            <Youtube placeholder='링크를 복사해주세요' />
         </InputWrapper>
         <ImageWrapper>
            <Label>사진첨부</Label>
            <UploadButton>+</UploadButton>
            <UploadButton>+</UploadButton>
            <UploadButton>+</UploadButton>
         </ImageWrapper>
         <OptionWrapper>
            <Label>메인설정</Label>
            <RadioButton type='radio' id='youtube' name='radio-button' />
            <RadioLabel htmlFor="youtube">유튜브</RadioLabel>
            <RadioButton type='radio' id='image' name='radio-button' />
            <RadioLabel htmlFor='image'>사진</RadioLabel>
         </OptionWrapper>
         <ButtonWrapper>
            <SubmitButton onClick={onClickSubmit}>등록하기</SubmitButton>
         </ButtonWrapper>
      </Wrapper>
   );
};

