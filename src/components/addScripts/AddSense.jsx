import React, {useEffect} from 'react'

function AddSense({ client, slot, format = 'auto' }) {
    useEffect(() => {
        (window.adsbygoogle = window.adsbygoogle || []).push({});
      }, []);
    
      const adCode = `
        <ins class="adsbygoogle"
             style="display:block"
             data-ad-client="${client}"
             data-ad-slot="${slot}"
             data-ad-format="${format}">
        </ins>
        <script async src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-2331167376516057" crossorigin="anonymous"></script>
      `;
      
  return <div dangerouslySetInnerHTML={{ __html: adCode }} />
}

export default AddSense;