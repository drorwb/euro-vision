import React from 'react';
import '../Prediction/Prediction.css'
import { Chart } from 'react-google-charts';
import teamsData from '../../teams_data.json';


class Prediction extends React.Component{
    state= {
        team1: teamsData.find( ({name}) => name==="Spain"),
        team2: teamsData.find( ({name}) => name==="England")
    }
    
    render(){
        const { team1, team2 } = this.state;
        const options = {
            vAxis: { title: "Victory percentages", viewWindow: { min: 0, max: 100}},
            hAxis: { title: "National Team", viewWindow: { min: 0, max: 2}},
            legend: 'none'
        }

        return(
            <div style={{display: 'flex'}}>
                <div>
                <Chart
                    chartType="ColumnChart"
                    width="200px"
                    height="600px"
                    options={options}
                    data={[
                        ["National Team", "Winning prediction"],
                        ["Spain", 0.6*100],
                        ["England", 0.4*100]
                    ]}
                />
                </div>
                <div style={{display: 'flex', width: 750, padding: 20, flexFlow: 'row wrap', alignItems: 'center', marginLeft: 60}}>
                    <img style={{width: 140 ,height: 100, padding: 10}} src={team1.photo} alt={team1.name}/>
                    <h1 style={{textAlign: 'center'}}>{team1.name} VS {team2.name}</h1>
                    <img style={{width: 140, height: 100, padding: 10}}  src={team2.photo} alt={team2.name}/>
                    <p>Based on our machine, in this specific game  the winner is going to be Spain.</p>
                </div>
            </div>
        )
    }
}

export default Prediction;

// export const Prediction = (props) => (
//     <div>
//         <h1>Euro 2020 Prediction</h1>
//         <div className="tournament-bracket tournament-bracket--rounded">
//             <div class="tournament-bracket__round tournament-bracket__round--quarterfinals">
//                 <h3 class="tournament-bracket__round-title">Quarterfinals</h3>
//                 <ul class="tournament-bracket__list">
//                     <li class="tournament-bracket__item">
//                     <div class="tournament-bracket__match" tabindex="0">
//                         <table class="tournament-bracket__table">
//                         <tbody class="tournament-bracket__content">
//                             <tr class="tournament-bracket__team tournament-bracket__team--winner">
//                             <td class="tournament-bracket__country">
//                                 <abbr class="tournament-bracket__code" title="Canada">CAN</abbr>
//                                 <span class="tournament-bracket__flag flag-icon flag-icon-ca" aria-label="Flag"></span>
//                             </td>
//                             <td class="tournament-bracket__score">
//                                 <span class="tournament-bracket__number">4</span>
//                             </td>
//                             </tr>
//                             <tr class="tournament-bracket__team">
//                             <td class="tournament-bracket__country">
//                                 <abbr class="tournament-bracket__code" title="Kazakhstan">KAZ</abbr>
//                                 <span class="tournament-bracket__flag flag-icon flag-icon-kz" aria-label="Flag"></span>
//                             </td>
//                             <td class="tournament-bracket__score">
//                                 <span class="tournament-bracket__number">1</span>
//                             </td>
//                             </tr>
//                         </tbody>
//                         </table>
//                     </div>
//                     </li>

//                     <li class="tournament-bracket__item">
//                     <div class="tournament-bracket__match" tabindex="0">
//                         <table class="tournament-bracket__table">
//                         <tbody class="tournament-bracket__content">
//                             <tr class="tournament-bracket__team tournament-bracket__team--winner">
//                             <td class="tournament-bracket__country">
//                                 <abbr class="tournament-bracket__code" title="Czech Republic">CZE</abbr>
//                                 <span class="tournament-bracket__flag flag-icon flag-icon-cz" aria-label="Flag"></span>
//                             </td>
//                             <td class="tournament-bracket__score">
//                                 <span class="tournament-bracket__number">4</span>
//                             </td>
//                             </tr>
//                             <tr class="tournament-bracket__team">
//                             <td class="tournament-bracket__country">
//                                 <abbr class="tournament-bracket__code" title="Unitede states of America">USA</abbr>
//                                 <span class="tournament-bracket__flag flag-icon flag-icon-us" aria-label="Flag"></span>
//                             </td>
//                             <td class="tournament-bracket__score">
//                                 <span class="tournament-bracket__number">1</span>
//                             </td>
//                             </tr>
//                         </tbody>
//                         </table>
//                     </div>
//                     </li>
                    
//                     <li class="tournament-bracket__item">
//                     <div class="tournament-bracket__match" tabindex="0">
//                         <table class="tournament-bracket__table"> 
//                         <tbody class="tournament-bracket__content">
//                             <tr class="tournament-bracket__team tournament-bracket__team--winner">
//                             <td class="tournament-bracket__country">
//                                 <abbr class="tournament-bracket__code" title="Finland">FIN</abbr>
//                                 <span class="tournament-bracket__flag flag-icon flag-icon-fi" aria-label="Flag"></span>
//                             </td>
//                             <td class="tournament-bracket__score">
//                                 <span class="tournament-bracket__number">2</span>
//                             </td>
//                             </tr>
//                             <tr class="tournament-bracket__team">
//                             <td class="tournament-bracket__country">
//                                 <abbr class="tournament-bracket__code" title="Sweden">SVE</abbr>
//                                 <span class="tournament-bracket__flag flag-icon flag-icon-se" aria-label="Flag"></span>
//                             </td>
//                             <td class="tournament-bracket__score">
//                                 <span class="tournament-bracket__number">1</span>
//                             </td>
//                             </tr>
//                         </tbody>
//                         </table>
//                     </div>
//                     </li>

//                     <li class="tournament-bracket__item">
//                     <div class="tournament-bracket__match" tabindex="0">
//                         <table class="tournament-bracket__table">
//                         <tbody class="tournament-bracket__content">
//                             <tr class="tournament-bracket__team tournament-bracket__team--winner">
//                             <td class="tournament-bracket__country">
//                                 <abbr class="tournament-bracket__code" title="Russia">RUS</abbr>
//                                 <span class="tournament-bracket__flag flag-icon flag-icon-ru" aria-label="Flag"></span>
//                             </td>
//                             <td class="tournament-bracket__score">
//                                 <span class="tournament-bracket__number">4</span>
//                             </td>
//                             </tr>
//                             <tr class="tournament-bracket__team">
//                             <td class="tournament-bracket__country">
//                                 <abbr class="tournament-bracket__code" title="Belarus">BEL</abbr>
//                                 <span class="tournament-bracket__flag flag-icon flag-icon-by" aria-label="Flag"></span>
//                             </td>
//                             <td class="tournament-bracket__score">
//                                 <span class="tournament-bracket__number">1</span>
//                             </td>
//                             </tr>
//                         </tbody>
//                         </table>
//                     </div>
//                     </li>
//                 </ul>
//                 </div>

//             <div class="tournament-bracket__round tournament-bracket__round--semifinals">
//                 <h3 class="tournament-bracket__round-title">Semifinals</h3>
//                 <ul class="tournament-bracket__list">
//                     <li class="tournament-bracket__item">
//                     <div class="tournament-bracket__match" tabindex="0">
//                         <table class="tournament-bracket__table">
//                         <tbody class="tournament-bracket__content">
//                             <tr class="tournament-bracket__team">
//                             <td class="tournament-bracket__country">
//                                 <abbr class="tournament-bracket__code" title="Canada">CAN</abbr>
//                                 <span class="tournament-bracket__flag flag-icon flag-icon-ca" aria-label="Flag"></span>
//                             </td>
//                             <td class="tournament-bracket__score">
//                                 <span class="tournament-bracket__number">1</span>
//                             </td>
//                             </tr>
//                             <tr class="tournament-bracket__team tournament-bracket__team--winner">
//                             <td class="tournament-bracket__country">
//                                 <abbr class="tournament-bracket__code" title="Czech Republic">CZE</abbr>
//                                 <span class="tournament-bracket__flag flag-icon flag-icon-cz" aria-label="Flag"></span>
//                             </td>
//                             <td class="tournament-bracket__score">
//                                 <span class="tournament-bracket__number">2</span>
//                             </td>
//                             </tr>
//                         </tbody>
//                         </table>
//                     </div>
//                     </li>

//                     <li class="tournament-bracket__item">
//                     <div class="tournament-bracket__match" tabindex="0">
//                         <table class="tournament-bracket__table">
//                         <tbody class="tournament-bracket__content">
//                             <tr class="tournament-bracket__team">
//                             <td class="tournament-bracket__country">
//                                 <abbr class="tournament-bracket__code" title="Finland">FIN</abbr>
//                                 <span class="tournament-bracket__flag flag-icon flag-icon-fi" aria-label="Flag"></span>
//                             </td>
//                             <td class="tournament-bracket__score">
//                                 <span class="tournament-bracket__number">4</span>
//                             </td>
//                             </tr>
//                             <tr class="tournament-bracket__team tournament-bracket__team--winner">
//                             <td class="tournament-bracket__country">
//                                 <abbr class="tournament-bracket__code" title="Russia">RUS</abbr>
//                                 <span class="tournament-bracket__flag flag-icon flag-icon-ru" aria-label="Flag"></span>
//                             </td>
//                             <td class="tournament-bracket__score">
//                                 <span class="tournament-bracket__number">7</span>
//                             </td>
//                             </tr>
//                         </tbody>
//                         </table>
//                     </div>
//                     </li>
//                 </ul>
//             </div>
//         </div>
//         {props.winner}
//     </div>
// );