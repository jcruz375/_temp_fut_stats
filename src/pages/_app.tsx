import { Layout } from '../components/layout'
import '../styles/globals.css'
import type { AppProps } from 'next/app'
import { ConfigProvider } from 'antd';
import theme from '../theme/themeConfig';

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <ConfigProvider theme={theme}>
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </ConfigProvider>
  )
}

export default MyApp
