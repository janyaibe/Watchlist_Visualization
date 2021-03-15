const tech_btn = document.querySelector('.tech')
const ev_btn = document.querySelector('.ev')
const canabis_btn = document.querySelector('.canabi')
const crypto_btn = document.querySelector('.crypto')

const cryp_gh = document.getElementById('crypto_gh')
const crypto_chrt = document.getElementById('crypto_chrt').getContext('2d');
const tech_gh = document.getElementById('tech_gh')
const tech_chrt = document.getElementById('tech_chrt').getContext('2d');
const canabis_gh = document.getElementById('canabis_gh')
const canabis_chrt = document.getElementById('canabis_chrt').getContext('2d');
const ev_gh = document.getElementById('ev_gh')
const ev_chrt = document.getElementById('ev_chrt').getContext('2d');


let dat1 =[]
function find_tech(){
    fetch('https://cloud.iexapis.com/v1/stock/AAPL/intraday-prices/?token=sk_e44ac415f3764c8b9e6a8e0f532b0f9d')
    .then(response => {
        return response.json()
    })
    .then(data => {
        console.log(data)
        dat1 += data.changeOverTime
        console.log(data[data.length -1])
        document.querySelector('.aapl_hi').innerHTML = 'High: '
        document.querySelector('.aapl_hi').innerHTML += data[data.length -1].high
        document.querySelector('.aapl_lo').innerHTML = 'Low: '
        document.querySelector('.aapl_lo').innerHTML += data[data.length -1].low
        document.querySelector('.aapl_vol').innerHTML = 'Volume: '
        document.querySelector('.aapl_vol').innerHTML += data[data.length -1].volume
        document.querySelector('.aapl_rn').innerHTML = 'Current: '
        document.querySelector('.aapl_rn').innerHTML += data[data.length -1].open
        
    })

    fetch('https://cloud.iexapis.com/v1/stock/AMD/intraday-prices/?token=sk_e44ac415f3764c8b9e6a8e0f532b0f9d')
    .then(response => {
        return response.json()
    })
    .then(data => {
        console.log(data)
        dat1 += data.changeOverTime
        console.log(data[data.length -1])
        document.querySelector('.amd_hi').innerHTML = 'High: '
        document.querySelector('.amd_hi').innerHTML += data[data.length -1].high
        document.querySelector('.amd_lo').innerHTML = 'Low: '
        document.querySelector('.amd_lo').innerHTML += data[data.length -1].low
        document.querySelector('.amd_vol').innerHTML = 'Volume: '
        document.querySelector('.amd_vol').innerHTML += data[data.length -1].volume
        document.querySelector('.amd_rn').innerHTML = 'Current: '
        document.querySelector('.amd_rn').innerHTML += data[data.length -1].open
        
    })

    fetch('https://cloud.iexapis.com/v1/stock/SNE/intraday-prices/?token=sk_e44ac415f3764c8b9e6a8e0f532b0f9d')
    .then(response => {
        return response.json()
    })
    .then(data => {
        console.log(data)
        dat1 += data.changeOverTime
        console.log(data[data.length -1])
        document.querySelector('.sne_hi').innerHTML = 'High: '
        document.querySelector('.sne_hi').innerHTML += data[data.length -1].high
        document.querySelector('.sne_lo').innerHTML = 'Low: '
        document.querySelector('.sne_lo').innerHTML += data[data.length -1].low
        document.querySelector('.sne_vol').innerHTML = 'Volume: '
        document.querySelector('.sne_vol').innerHTML += data[data.length -1].volume
        document.querySelector('.sne_rn').innerHTML = 'Current: '
        document.querySelector('.sne_rn').innerHTML += data[data.length -1].open
        
    })

    fetch('https://cloud.iexapis.com/v1/stock/TWTR/intraday-prices/?token=sk_e44ac415f3764c8b9e6a8e0f532b0f9d')
    .then(response => {
        return response.json()
    })
    .then(data => {
        console.log(data)
        dat1 += data.changeOverTime
        console.log(data[data.length -1])
        document.querySelector('.twtr_hi').innerHTML = 'High: '
        document.querySelector('.twtr_hi').innerHTML += data[data.length -1].high
        document.querySelector('.twtr_lo').innerHTML = 'Low: '
        document.querySelector('.twtr_lo').innerHTML += data[data.length -1].low
        document.querySelector('.twtr_vol').innerHTML = 'Volume: '
        document.querySelector('.twtr_vol').innerHTML += data[data.length -1].volume
        document.querySelector('.twtr_rn').innerHTML = 'Current: '
        document.querySelector('.twtr_rn').innerHTML += data[data.length -1].open
        
    })

    fetch('https://cloud.iexapis.com/v1/stock/INTC/intraday-prices/?token=sk_e44ac415f3764c8b9e6a8e0f532b0f9d')
    .then(response => {
        return response.json()
    })
    .then(data => {
        console.log(data)
        dat1 += data.changeOverTime
        console.log(data[data.length -1])
        document.querySelector('.intc_hi').innerHTML = 'High: '
        document.querySelector('.intc_hi').innerHTML += data[data.length -1].high
        document.querySelector('.intc_lo').innerHTML = 'Low: '
        document.querySelector('.intc_lo').innerHTML += data[data.length -1].low
        document.querySelector('.intc_vol').innerHTML = 'Volume: '
        document.querySelector('.intc_vol').innerHTML += data[data.length -1].volume
        document.querySelector('.intc_rn').innerHTML = 'Current: '
        document.querySelector('.intc_rn').innerHTML += data[data.length -1].open
        
    })

    console.log('fetched')
    const tech_chart = new Chart(tech_chrt, {
        type: 'bar',
        data: {
            labels: ['AAPL', 'AMD', 'SNE', 'TWTR', 'INTC'],
            datasets:[{
                label:'% change',
                data: [dat3[0], dat3[1], dat3[2], dat3[3], dat3[4], 0],
                backgroundColor:[
                    'rgba(255,99,132,.2)',
                    'rgba(246,167,76,.2)',
                    'rgba(279,200,30,.2)',
                    'rgba(230,120,112,.2)',
                    'rgba(264,144,55,.2)',
    
                ]
            }]
        }
    })
}
let dat2 = []
function find_ev(){
    fetch('https://cloud.iexapis.com/v1/stock/TSLA/intraday-prices/?token=sk_e44ac415f3764c8b9e6a8e0f532b0f9d')
    .then(response => {
        return response.json()
    })
    .then(data => {
        console.log(data)
        dat2 += data.changeOverTime
        console.log(data[data.length -1])
        document.querySelector('.tsla_hi').innerHTML = 'High: '
        document.querySelector('.tsla_hi').innerHTML += data[data.length -1].high
        document.querySelector('.tsla_lo').innerHTML = 'Low: '
        document.querySelector('.tsla_lo').innerHTML += data[data.length -1].low
        document.querySelector('.tsla_vol').innerHTML = 'Volume: '
        document.querySelector('.tsla_vol').innerHTML += data[data.length -1].volume
        document.querySelector('.tsla_rn').innerHTML = 'Current: '
        document.querySelector('.tsla_rn').innerHTML += data[data.length -1].open
        
    })

    fetch('https://cloud.iexapis.com/v1/stock/NIO/intraday-prices/?token=sk_e44ac415f3764c8b9e6a8e0f532b0f9d')
    .then(response => {
        return response.json()
    })
    .then(data => {
        console.log(data)
        dat2 += data.changeOverTime
        console.log(data[data.length -1])
        document.querySelector('.nio_hi').innerHTML = 'High: '
        document.querySelector('.nio_hi').innerHTML += data[data.length -1].high
        document.querySelector('.nio_lo').innerHTML = 'Low: '
        document.querySelector('.nio_lo').innerHTML += data[data.length -1].low
        document.querySelector('.nio_vol').innerHTML = 'Volume: '
        document.querySelector('.nio_vol').innerHTML += data[data.length -1].volume
        document.querySelector('.nio_rn').innerHTML = 'Current: '
        document.querySelector('.nio_rn').innerHTML += data[data.length -1].open
        
    })

    fetch('https://cloud.iexapis.com/v1/stock/NKLA/intraday-prices/?token=sk_e44ac415f3764c8b9e6a8e0f532b0f9d')
    .then(response => {
        return response.json()
    })
    .then(data => {
        console.log(data)
        dat2 += data.changeOverTime
        console.log(data[data.length -1])
        document.querySelector('.nkla_hi').innerHTML = 'High: '
        document.querySelector('.nkla_hi').innerHTML += data[data.length -1].high
        document.querySelector('.nkla_lo').innerHTML = 'Low: '
        document.querySelector('.nkla_lo').innerHTML += data[data.length -1].low
        document.querySelector('.nkla_vol').innerHTML = 'Volume: '
        document.querySelector('.nkla_vol').innerHTML += data[data.length -1].volume
        document.querySelector('.nkla_rn').innerHTML = 'Current: '
        document.querySelector('.nkla_rn').innerHTML += data[data.length -1].open
        
    })

    fetch('https://cloud.iexapis.com/v1/stock/XPEV/intraday-prices/?token=sk_e44ac415f3764c8b9e6a8e0f532b0f9d')
    .then(response => {
        return response.json()
    })
    .then(data => {
        console.log(data)
        dat2 += data.changeOverTime
        console.log(data[data.length -1])
        document.querySelector('.xpev_hi').innerHTML = 'High: '
        document.querySelector('.xpev_hi').innerHTML += data[data.length -1].high
        document.querySelector('.xpev_lo').innerHTML = 'Low: '
        document.querySelector('.xpev_lo').innerHTML += data[data.length -1].low
        document.querySelector('.xpev_vol').innerHTML = 'Volume: '
        document.querySelector('.xpev_vol').innerHTML += data[data.length -1].volume
        document.querySelector('.xpev_rn').innerHTML = 'Current: '
        document.querySelector('.xpev_rn').innerHTML += data[data.length -1].open
        
    })

    fetch('https://cloud.iexapis.com/v1/stock/LI/intraday-prices/?token=sk_e44ac415f3764c8b9e6a8e0f532b0f9d')
    .then(response => {
        return response.json()
    })
    .then(data => {
        console.log(data)
        dat2 += data.changeOverTime
        console.log(data[data.length -1])
        document.querySelector('.li_hi').innerHTML = 'High: '
        document.querySelector('.li_hi').innerHTML += data[data.length -1].high
        document.querySelector('.li_lo').innerHTML = 'Low: '
        document.querySelector('.li_lo').innerHTML += data[data.length -1].low
        document.querySelector('.li_vol').innerHTML = 'Volume: '
        document.querySelector('.li_vol').innerHTML += data[data.length -1].volume
        document.querySelector('.li_rn').innerHTML = 'Current: '
        document.querySelector('.li_rn').innerHTML += data[data.length -1].open
        
    })

    console.log('fetched')
    const ev_chart = new Chart(ev_chrt, {
        type: 'bar',
        data: {
            labels: ['TSLA', 'NIO', 'NKLA', 'XPEV', 'LI'],
            datasets:[{
                label:'% change',
                data: [dat2[0], dat2[1], dat2[2], dat2[3], dat2[4], 0],
                backgroundColor:[
                    'rgba(255,99,132,.2)',
                    'rgba(246,167,76,.2)',
                    'rgba(279,200,30,.2)',
                    'rgba(230,120,112,.2)',
                    'rgba(264,144,55,.2)',
    
                ]
            }]
        }
    })
}
let dat3 = []
function find_crypto(){
    fetch('https://cloud.iexapis.com/v1/stock/RIOT/intraday-prices/?token=sk_e44ac415f3764c8b9e6a8e0f532b0f9d')
    .then(response => {
        return response.json()
    })
    .then(data => {
        console.log(data)
        dat3 += data.changeOverTime
        console.log(data[data.length -1])
        document.querySelector('.riot_hi').innerHTML = 'High: '
        document.querySelector('.riot_hi').innerHTML += data[data.length -1].high
        document.querySelector('.riot_lo').innerHTML = 'Low: '
        document.querySelector('.riot_lo').innerHTML += data[data.length -1].low
        document.querySelector('.riot_vol').innerHTML = 'Volume: '
        document.querySelector('.riot_vol').innerHTML += data[data.length -1].volume
        document.querySelector('.riot_rn').innerHTML = 'Current: '
        document.querySelector('.riot_rn').innerHTML += data[data.length -1].open
        
    })
    

    fetch('https://cloud.iexapis.com/v1/stock/MARA/intraday-prices/?token=sk_e44ac415f3764c8b9e6a8e0f532b0f9d')
    .then(response => {
        return response.json()
    })
    .then(data => {
        console.log(data)
        dat3 += data[data.length -1 ].high
        console.log(data[data.length -1])
        document.querySelector('.mara_hi').innerHTML = 'High: '
        document.querySelector('.mara_hi').innerHTML += data[data.length -1].high
        document.querySelector('.mara_lo').innerHTML = 'Low: '
        document.querySelector('.mara_lo').innerHTML += data[data.length -1].low
        document.querySelector('.mara_vol').innerHTML = 'Volume: '
        document.querySelector('.mara_vol').innerHTML += data[data.length -1].volume
        document.querySelector('.mara_rn').innerHTML = 'Current: '
        document.querySelector('.mara_rn').innerHTML += data[data.length -1].open
        
    })
    console.log(dat3[dat3.length - 1])
    const crypto_chart = new Chart(crypto_chrt, {
        type: 'bar',
        data: {
            labels: ['RIOT', 'MARA'],
            datasets:[{
                label:'% change',
                data: [5, 10, 0],
                backgroundColor:[
                    'rgba(255,99,132,.2)',
                    'rgba(246,167,76,.2)',
    
                ]
            }]
        }
    })

}
let dat4 = []
function find_canabis(){
    fetch('https://cloud.iexapis.com/v1/stock/TLRY/intraday-prices/?token=sk_e44ac415f3764c8b9e6a8e0f532b0f9d')
    .then(response => {
        return response.json()
    })
    .then(data => {
        console.log(data)
        dat4 += data.changeOverTime
        console.log(data[data.length -1])
        document.querySelector('.tlry_hi').innerHTML = 'High: '
        document.querySelector('.tlry_hi').innerHTML += data[data.length -1].high
        document.querySelector('.tlry_lo').innerHTML = 'Low: '
        document.querySelector('.tlry_lo').innerHTML += data[data.length -1].low
        document.querySelector('.tlry_vol').innerHTML = 'Volume: '
        document.querySelector('.tlry_vol').innerHTML += data[data.length -1].volume
        document.querySelector('.tlry_rn').innerHTML = 'Current: '
        document.querySelector('.tlry_rn').innerHTML += data[data.length -1].open
        
    })

    fetch('https://cloud.iexapis.com/v1/stock/CGC/intraday-prices/?token=sk_e44ac415f3764c8b9e6a8e0f532b0f9d')
    .then(response => {
        return response.json()
    })
    .then(data => {
        console.log(data)
        dat4 += data.changeOverTime
        console.log(data[data.length -1])
        document.querySelector('.cgc_hi').innerHTML = 'High: '
        document.querySelector('.cgc_hi').innerHTML += data[data.length -1].high
        document.querySelector('.cgc_lo').innerHTML = 'Low: '
        document.querySelector('.cgc_lo').innerHTML += data[data.length -1].low
        document.querySelector('.cgc_vol').innerHTML = 'Volume: '
        document.querySelector('.cgc_vol').innerHTML += data[data.length -1].volume
        document.querySelector('.cgc_rn').innerHTML = 'Current: '
        document.querySelector('.cgc_rn').innerHTML += data[data.length -1].open
        
    })

    fetch('https://cloud.iexapis.com/v1/stock/ACB/intraday-prices/?token=sk_e44ac415f3764c8b9e6a8e0f532b0f9d')
    .then(response => {
        return response.json()
    })
    .then(data => {
        console.log(data)
        dat4 += data.changeOverTime
        console.log(data[data.length -1])
        document.querySelector('.acb_hi').innerHTML = 'High: '
        document.querySelector('.acb_hi').innerHTML += data[data.length -1].high
        document.querySelector('.acb_lo').innerHTML = 'Low: '
        document.querySelector('.acb_lo').innerHTML += data[data.length -1].low
        document.querySelector('.acb_vol').innerHTML = 'Volume: '
        document.querySelector('.acb_vol').innerHTML += data[data.length -1].volume
        document.querySelector('.acb_rn').innerHTML = 'Current: '
        document.querySelector('.acb_rn').innerHTML += data[data.length -1].open
        
    })

    fetch('https://cloud.iexapis.com/v1/stock/SNDL/intraday-prices/?token=sk_e44ac415f3764c8b9e6a8e0f532b0f9d')
    .then(response => {
        return response.json()
    })
    .then(data => {
        console.log(data)
        dat4 += data.changeOverTime
        console.log(data[data.length -1])
        document.querySelector('.sndl_hi').innerHTML = 'High: '
        document.querySelector('.sndl_hi').innerHTML += data[data.length -1].high
        document.querySelector('.sndl_lo').innerHTML = 'Low: '
        document.querySelector('.sndl_lo').innerHTML += data[data.length -1].low
        document.querySelector('.sndl_vol').innerHTML = 'Volume: '
        document.querySelector('.sndl_vol').innerHTML += data[data.length -1].volume
        document.querySelector('.sndl_rn').innerHTML = 'Current: '
        document.querySelector('.sndl_rn').innerHTML += data[data.length -1].open
        
    })
    console.log('fetched')
    const canabis_chart = new Chart(canabis_chrt, {
        type: 'bar',
        data: {
            labels: ['TLRY', 'CGC', 'ACB', 'SNDL'],
            datasets:[{
                label:'% change',
                data: [dat4[0], dat4[1], dat4[2], dat4[3], 0],
                backgroundColor:[
                    'rgba(255,99,132,.2)',
                    'rgba(246,167,76,.2)',
                    'rgba(279,200,30,.2)',
                    'rgba(230,120,112,.2)'
                ]
            }]
        }
    })
}


tech_btn.addEventListener('click', ()=> {
    if(document.querySelector('.Techs').style.display == 'none'){
        console.log('changing to flex')
        let interate = setInterval(find_tech, 3000);
        document.querySelector('.Techs').style.display = 'flex';
    }

    else{
        interate = undefined;
        document.querySelector('.Techs').style.display = 'none';
        // document.querySelector('.Techs').style.display = 'none'

    }

    console.log('clicked')
})
ev_btn.addEventListener('click', ()=> {
    if(document.querySelector('.Evs').style.display == 'none'){
        console.log('changing to flex')
        setInterval(find_ev, 3000);
        document.querySelector('.Evs').style.display = 'flex';
    }

    else{
        clearInterval()
        document.querySelector('.Evs').style.display = 'none'
    }

    console.log('clicked')
})
canabis_btn.addEventListener('click', ()=> {
    if(document.querySelector('.Canabis').style.display == 'none'){
        console.log('changing to flex')
        setInterval(find_canabis, 3000);
        document.querySelector('.Canabis').style.display = 'flex';
    }

    else{
        clearInterval()
        document.querySelector('.Canabis').style.display = 'none'
    }

    console.log('clicked')
})
crypto_btn.addEventListener('click', ()=> {
    if(document.querySelector('.Cryptos').style.display == 'none'){
        console.log('changing to flex')
        setInterval(find_crypto, 3000);
        document.querySelector('.Cryptos').style.display = 'flex';
    }

    else{
        clearInterval()
        document.querySelector('.Cryptos').style.display = 'none'
    }

    console.log('clicked')
})

cryp_gh.addEventListener('click', () => {
    if(document.getElementById('crypto_chrt').style.display == 'none'){
        document.getElementById('crypto_chrt').style.display = 'flex'
        document.getElementById('crypto_gh').innerHTML = 'Close'
    }
    else{
        document.getElementById('crypto_chrt').style.display = 'none'
        document.getElementById('crypto_gh').innerHTML = 'Graph'
    }
    
})

tech_gh.addEventListener('click', () => {
    if(document.getElementById('tech_chrt').style.display == 'none'){
        document.getElementById('tech_chrt').style.display = 'flex'
        document.getElementById('tech_gh').innerHTML = 'Close'
    }
    else{
        document.getElementById('tech_chrt').style.display = 'none'
        document.getElementById('tech_gh').innerHTML = 'Graph'
    }
    
})

canabis_gh.addEventListener('click', () => {
    if(document.getElementById('canabis_chrt').style.display == 'none'){
        document.getElementById('canabis_chrt').style.display = 'flex'
        document.getElementById('canabis_gh').innerHTML = 'Close'
    }
    else{
        document.getElementById('canabis_chrt').style.display = 'none'
        document.getElementById('canabis_gh').innerHTML = 'Graph'
    }
    
})

ev_gh.addEventListener('click', () => {
    if(document.getElementById('ev_chrt').style.display == 'none'){
        document.getElementById('ev_chrt').style.display = 'flex'
        document.getElementById('ev_gh').innerHTML = 'Close'
    }
    else{
        document.getElementById('ev_chrt').style.display = 'none'
        document.getElementById('ev_gh').innerHTML = 'Graph'
    }
    
})
