import React, {useState} from 'react';
import styled from '@emotion/styled';

import Header from './components/Header';
import Form from './components/Form';

import Details from './components/Details';
import Result from './components/Result';

const Container = styled.div`
  max-width:600px;
  margin: 0 auto;
`;

const FormContainer = styled.div`
  background-color:#FFF;
  padding: 3rem;
`;

function App() {
  const [details, setDetails] = useState({});
  const { data } = details;
  const { quote } = details;
  return (
    <Container className="App">
      <Header title='Insurance Quote' />
      <FormContainer>
        <Form setDetails={setDetails} />
        {data !=null?
          <Details data={data} />
          : null}
        {quote != null ?
          <Result total={quote} />
          :null}
      </FormContainer>
    </Container>
  );
}

export default App;
