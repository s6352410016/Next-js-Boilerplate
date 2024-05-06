import axios from "axios";

export const axiosInstance = axios.create({
  baseURL: "https://pantip.com",
  headers: {
    'accept': 'application/json, text/plain, */*',
    'accept-language': 'en-US,en;q=0.9',
    'cache-control': 'no-cache',
    'cookie': 'pantip_visitc=s2m9gu2gs0z4k5BUv0Jgp; ka_iid=5ZspV6i2Bs9QmPybvRYGKf; iUUID=bcdb61dfeab7cf1787de2cb7b19a6738; _cc_id=4716f2118a994dd8fc3ac9ea6d9832b3; panoramaId_expiry=1715232623867; panoramaId=086a294a872c7b5ec9c2f7427ee016d539383fa3861618911b236bdfc2725660; panoramaIdType=panoIndiv; cto_bundle=aoRtMF9qTGRLZnlKckY5dHc1QVJqd2tmdm5qZmFSclQ0eXpBbHRNQnFma0Z3NGswRm1aVFh5QlBlM2hEdnVYSUdmY1Z0a0dwQmI1d3ZpTW4xcHpyZW1COHFqdyUyQkJqSTVQNE80ZUdkTjVObWM0bTU2TFRJbzBnWTFTRllHcU16SUNTbWFGWUZlOFo4REVMcXpkWXExb1olMkY5M0o0aEE5TE5OdzIwN05YazFkam5PcCUyQlJaOHU2TzVGSjRJS1VXd05ibEN0S0hZelBERWFmaHV1cHVHeGwlMkY3WVdlaVElM0QlM0Q; FCNEC=^%^5B^%^5B^%^22AKsRol-VNj38guhG3Rs7FBy92nL4HYfEm-MCyQ-yIdj4Nw9jJuFQHA2sY1ScKUnwlRSGQZHm8n6xsEuuxsLbEUHMemie1dBJwuD-gTaiek5qvdYGi6urjMT5dwgQ3YF9JN6y5riSOENkWajSbo175SFrAPCXW9cSeQ^%^3D^%^3D^%^22^%^5D^%^5D; ptpolicy=1; PHPSESSID=aam71gno1agl54gp2jjm08h1l4; _gid=GA1.2.1457650532.1714980144; freq.5f73e63e47e7040e00000000=1; innity.dmp.cks.innity=1; innity.dmp.254.sess.id=65313981.254.1714985998165; ka_sid=3F6PQtmK5NhRRav555Arim; rlr=42691970; __gads=ID=6ff896bc6db01279:T=1697450864:RT=1714990308:S=ALNI_MZTKRBg-WFGcpruDOFpK-c2Wap_pA; __gpi=UID=00000c63fd02614b:T=1697450864:RT=1714990308:S=ALNI_MaQ-DAK9YNC9sW33vw46h7eidaAWQ; __eoi=ID=702dc580755dc76a:T=1714627823:RT=1714990308:S=AA-Afjav80r35jz1gtMJ6KjdFbft; real_referer=^%^3A^%^2F^%^2Fpantip.com^%^2Fs^%^2F4w99Y; _dc_gtm_UA-10478864-2=1; pantip_sessions=^%^2FVB2^%^2FYt^%^2BF5mMlVcmypEEa0cSxl8nAy9pKDksKr^%^2Bn3we3M7KHYTxDiNoezO5mlSdyVDxol5dAd19VPKwTwCXa3Zfyg^%^2FdVsxrwyXiglVzSRFMe6D49as9JB34yaVF7My8pFBt6KMgMw5zz5^%^2Ba56mSPUFefVqDlpD6G^%^2BXFL^%^2BDH5CXm22rOszkSHIMXjBzB3A6^%^2BcwRiT0yAR^%^2BWn5iR^%^2F4bOSOb7LH4nD7n0YGL6pRgmXU04eX^%^2BEriTKZ9f7^%^2BDlBm^%^2BaFK^%^2BmOsreQta^%^2Bpxk3ueTyDxb6tL8wS8ljpS1rSDdttHM1^%^2BOrcXGluYGeSVNAI8pG4GmOCXgx4Z33mWezYZrIcMPGGQ^%^3D^%^3D; innity.dmp.254.sess=23.1714985998165.1714993554509.1714993559004; _ga=GA1.1.84055935.1697450862; _ga_ZMC2WGXL4Z=GS1.1.1714985998.27.1.1714993568.46.0.0^',
    'pragma': 'no-cache',
    'priority': 'u=1, i',
    'ptauthorize': 'Basic dGVzdGVyOnRlc3Rlcg==',
    'referer': 'https://pantip.com/',
    'sec-ch-ua': '"Chromium";v="124", "Google Chrome";v="124", "Not-A.Brand";v="99"',
    'sec-ch-ua-mobile': '?1',
    'sec-ch-ua-platform': '"Android"',
    'sec-fetch-dest': 'empty',
    'sec-fetch-mode': 'cors',
    'sec-fetch-site': 'same-origin',
    'user-agent': 'Mozilla/5.0 (Linux; Android 6.0; Nexus 5 Build/MRA58N) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/'
  }
});