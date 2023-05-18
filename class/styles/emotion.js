import styled from "@emotion/styled";

export const Wrapper = styled.div`
   width : 1200px;
   border : 1px solid black;
   border : none;
   box-shadow : 0px 0px 10px gray;
   margin : 100px;
   padding : 80px 102px 100px 102px;
   display : flex;
   flex-direction : column;
   align-items : center;
`;

export const Title = styled.div`
   font-size : 36px;
   font-weight : bold;
`;

export const WriterWrapper = styled.div`
   width: 100%;
   display: flex;
   flex-direction: row;
   justify-content: space-between;
   padding-top: 40px;
`;

export const InputWrapper = styled.div`
   padding-top: 40px;
`;

export const Label = styled.div`
   font-size: 16px;
   font-size: 500;
   padding-bottom: 16px;
`;

export const Writer = styled.input`
   width: 468px;
   height: 52px;
   padding-left: 16px;
   border: 1px solid #bdbdbd;
`;

export const Password = styled.input`
   width: 486px;
   height: 52px;
   padding: 16px;
   border: 1px solid #bdbdbd;
`;

export const Subject = styled.input`
   width: 996px;
   height: 52px;
   padding: 16px;
   border: 1px solid #bdbdbd;
`;

export const Contents = styled.input`
   width: 996px;
   height: 480px;
   padding: 14px;
   padding-left: 16px;
   border: 1px solid #bdbdbd;
`;

export const ZipcodeWrapper = styled.div`
   display: flex;
   flex-direction: row;
`;

export const Zipcode = styled.input`
   width: 77px;
   height: 52px;
   padding-left: 16px;
   border: 1px solid #bdbdbd;
`; 

export const SearchButton = styled.button`
   width: 124px;
   height: 52px;
   background: #000;
   color: #fff;
   cursor: pointer;
   margin-left: 16px;
`;

export const Address = styled.input`
   width: 996px;
   height: 52px;
   margin-top: 16px;
   padding-left: 16px;
   border: 1px solid #bdbdbd;
`;

export const Youtube = styled.input`
   width: 996px;
   height: 52px;
   padding-left: 16px;
   border: 1px solid #bdbdbd;
`;

export const ImageWrapper = styled.div`
   width: 996px;
   padding-top: 40px;
`;

export const UploadButton = styled.button`
   width: 78px;
   height: 78px;
   cursor: pointer;
   background-color: #bdbdbd;
   outline: none;
   border: none;
   margin-right: 24px;
`;

export const OptionWrapper = styled.div`
   width: 996px;
   padding-top: 40px;
`;

export const RadioButton = styled.input`
   cursor: pointer;
`;

export const RadioLabel = styled.label`
   cursor: pointer;
   margin-left: 8px;
   margin-right: 20px;
   font-weight: 500;
`;

export const ButtonWrapper = styled.div`
   display: flex;
   flex-direction: row;
   justify-content: center;
   padding-top: 80px;
`;

export const SubmitButton = styled.button`
   width: 179px;
   height: 52px;
   border: none;
   font-size: 16px;
   font-weight: 500;
   margin-left: 12px;
   margin-right: 12px;
   cursor: pointer;

   background-color: yellow;
`;

export const CancelButton = styled.button`
   width: 179px;
   height: 52px;
   background-color: #bdbdbd;
   border: none;
   font-size: 16px;
   font-weight: 500;
   margin-left: 12px;
   margin-right: 12px;
   cursor: pointer;
`;

export const Error = styled.div`
   padding-top: 10px;
   font-weight: 13px;
   color: red;
`;