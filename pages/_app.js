import '../styles/bootstrap.min.css';
import 'animate.css'
import '../styles/boxicons.min.css';
import '../styles/flaticon.css';
import '../node_modules/react-modal-video/css/modal-video.min.css';
import 'react-accessible-accordion/dist/fancy-example.css';
import '../styles/style.css';
import '../styles/responsive.css';

import App from 'next/app';
import Head from 'next/head';
import Script from 'next/script';
import Loader from '../components/Shared/Loader';
import GoTop from '../components/Shared/GoTop';

export default class MyApp extends App {

    // Preloader
    state = {
        loading: true
    };
    componentDidMount() {
        this.timerHandle = setTimeout(() => this.setState({ loading: false }), 2000);
    }
    componentWillUnmount() {
        if (this.timerHandle) {
            clearTimeout(this.timerHandle);
            this.timerHandle = 0;
        }
    }

    render() {
        const { Component, pageProps } = this.props

        return (
            <>
                <Head>
                    <meta name="viewport" content="width=device-width, initial-scale=1" />
                    <title>Omega Technology & Computer Consulting</title>
                </Head>

                <Component {...pageProps} />
                <Script
                    type="text/javascript"
                    id="zsiqchat"
                    strategy='lazyOnload'>
                    {`
                        var $zoho=$zoho || {};
                        $zoho.salesiq = $zoho.salesiq || {widgetcode: "504dff044845f4483e8a3a466d9ca81d8bb7344f55f131972299e24e8ed39dc604fac452a4abf3a603b78406da283982", values:{},ready:function(){}};
                        var d=document;
                        s=d.createElement("script");
                        s.type="text/javascript";
                        s.id="zsiqscript";
                        s.defer=true;s.src="https://salesiq.zoho.com/widget";
                        t=d.getElementsByTagName("script")[0];
                        t.parentNode.insertBefore(s,t);
                       `}
                </Script>
                {/* Preloader */}
                <Loader loading={this.state.loading} />

                {/* Go Top Button */}
                <GoTop scrollStepInPx="100" delayInMs="10.50" />
            </>
        );
    }
}

