// TradingViewWidget.jsx

import { useEffect, useRef } from 'react';

let tvScriptLoadingPromise;

export default function TradingViewWidget() {
    const onLoadScriptRef = useRef();

    useEffect(
        () => {
            onLoadScriptRef.current = createWidget;

            if (!tvScriptLoadingPromise) {
                tvScriptLoadingPromise = new Promise((resolve) => {
                    const script = document.createElement('script');
                    script.id = 'tradingview-widget-loading-script';
                    script.src = 'https://s3.tradingview.com/tv.js';
                    script.type = 'text/javascript';
                    script.onload = resolve;

                    document.head.appendChild(script);
                });
            }

            tvScriptLoadingPromise.then(() => onLoadScriptRef.current && onLoadScriptRef.current());

            return () => onLoadScriptRef.current = null;

            function createWidget() {
                if (document.getElementById('tradingview_8f993') && 'TradingView' in window) {
                    new window.TradingView.widget({
                        width: "1350",
                        height: "910",
                        symbol: "BINANCE:BTCUSD",
                        interval: "15",
                        timezone: "Etc/UTC",
                        theme: "light",
                        style: "1",
                        locale: "en",
                        enable_publishing: false,
                        withdateranges: true,
                        hide_side_toolbar: false,
                        allow_symbol_change: true,
                        studies: ["STD;24h%Volume", "STD;Bollinger_Bands", "STD;DEMA", "PriceVolumeTrend@tv-basicstudies", "STD;RSI", "STD;Supertrend", "Volume@tv-basicstudies"],
                        container_id: "tradingview_8f993"
                    });
                }
            }
        },
        []
    );

    return (
        <>
            <p className=" text-4xl font-extrabold  text-center py-10 text-orange-500 flex justify-center items-center gap-3">Coin Analysis</p>

            <div className='tradingview-widget-container'>
                <div id='tradingview_8f993' />
                <div className="tradingview-widget-copyright">

                </div>
            </div>
        </>

    );
}
