import {
  Body,
  Container,
  Head,
  Heading,
  Html,
  Img,
  Link,
  Section,
  Text,
} from '@react-email/components';
import * as React from 'react';

interface EmailTemplateProps {
  nombre?: string;
  numero_pedido?: string;
}

const baseUrl = 'https://www.shortcut.com.ar';

export const EmailTemplate = ({
  nombre,
  numero_pedido,
}: EmailTemplateProps) => (
  <Html>
    <Body style={main}>
      <Container style={container}>
        <Img
          src={`${baseUrl}/logoTransparente.png`}
          width="88"
          height="88"
          alt="Plaid"
          style={logo}
        />
        <Section style={codeContainer}>
          <p style={secondaryOne}>
            <span>Gracias, {nombre}</span>
          </p>
          <p style={secondary}>
            <span>Recibimos tu pedido </span>
          </p>
        </Section>
        <Section style={codeContainer}>
          <Text style={code}>#{numero_pedido}</Text>
        </Section>
        <Text style={paragraph}>
          Retiralo por el stand de ShortCut con tu número de pedido.
        </Text>
      </Container>
    </Body>
  </Html>
);

const main = {
  backgroundColor: '#ffff',
  fontFamily: 'Montserrat,Arial,sans-serif',
};

const container = {
  backgroundColor: '#0B1044',
  border: '1px solid #eee',
  borderRadius: '5px',
  boxShadow: '0 5px 10px rgba(20,50,70,.2)',
  marginTop: '20px',
  width: '360px',
  margin: '0 auto',
  padding: '68px 0 130px',
};

const logo = {
  margin: '0 auto',
  marginBottom: '30px',
};

const secondary = {
  color: '#DF9BB7',
  // display: 'flex',
  // justifyContent: 'center',
  fontFamily: 'Montserrat,Arial,sans-serif',
  fontSize: '20px',
  fontWeight: 500,
  lineHeight: '24px',
  marginBottom: '0',
  marginTop: '100px',
  margin: '0 auto',
  textAlign: 'center' as const,
};

const secondaryOne = {
  color: '#DF9BB7',
  // display: 'flex',
  // justifyContent: 'center',
  fontFamily: 'Montserrat,Arial,sans-serif',
  fontSize: '35px',
  fontWeight: 700,
  lineHeight: '24px',
  marginBottom: '20px',
  marginTop: '10px',
  textAlign: 'center' as const,
};

const codeContainer = {
  background: 'rgba(0,0,0,.05)',
  borderRadius: '4px',
  margin: '16px auto 14px',
  verticalAlign: 'middle',
  width: '280px',
};

const code = {
  color: '#fff',
  display: 'inline-block',
  fontFamily: 'Montserrat-Bold',
  fontSize: '52px',
  fontWeight: 1000,
  letterSpacing: '6px',
  lineHeight: '40px',
  paddingBottom: '8px',
  paddingTop: '8px',
  margin: '0 auto',
  width: '100%',
  textAlign: 'center' as const,
};

const paragraph = {
  color: '#acacac',
  fontSize: '15px',
  fontFamily: 'Montserrat,Arial,sans-serif',
  letterSpacing: '0',
  lineHeight: '23px',
  padding: '0 40px',
  marginTop: '20px',
  textAlign: 'center' as const,
};

export default EmailTemplate;