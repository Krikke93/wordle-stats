import { Component, OnInit } from '@angular/core';
import { LEAP_YEAR_STRUCTURE, YEAR_STRUCTURE, YearStructure } from '../structure/structure.model';
import { YearData } from '../../environments/data.model';
import { environment } from '../../environments/environment';

@Component({
  selector: 'wordle-overview',
  templateUrl: './overview.component.html',
  styleUrls: ['./overview.component.scss']
})
export class OverviewComponent implements OnInit {
  years: {
    year: number,
    structure: YearStructure,
    data: YearData,
    overview: (number[] | null)[][][],
    startDays: number[],
    endDays: number[],
    collapsed: boolean,
  }[] = [];

  dayNames = ['Mo', 'Tu', 'We', 'Th', 'Fr', 'Sa', 'Su'];
  playerNames = ['Kr', 'Ko', 'Hi'];

  ngOnInit(): void {
    let firstDay = environment.firstDay;
    this.years = Object.entries(environment.data).map(([year, data]) => {
      const months: (number[] | null)[][][] = [];
      const startDays: number[] = [];
      const endDays: number[] = [];
      data.months.forEach((monthData: (number[] | null)[]) => {
        const weeks: (number[] | null)[][] = [];
        let currentWeek: (number[] | null)[] = [];
        let lastDay = firstDay;
        let monthPoints: number[] = [];
        monthData.forEach((dayData: number[] | null, i: number) => {
          if (i === 0) {
            for (let j = 0; j < firstDay; j++) {
              currentWeek.push(null);
            }
          }
          if (dayData !== null) {
            if (monthPoints.length > 0) {
              monthPoints = monthPoints.map((dayPoint, playerIndex) => dayPoint + dayData[playerIndex]);
            } else {
              monthPoints = [...dayData];
            }
          }
          currentWeek.push(dayData !== null ? monthPoints : null);
          lastDay++;
          if (lastDay > 6) {
            lastDay = 0;
          }
          if (i === monthData.length - 1) {
            for (let j = currentWeek.length; j < 7; j++) {
              currentWeek.push(null);
            }
          }
          if (currentWeek.length === 7 || i === monthData.length - 1) {
            weeks.push(currentWeek);
            currentWeek = [];
          }
        });
        startDays.push(firstDay);
        endDays.push(lastDay === 0 ? 6 : lastDay - 1);
        firstDay = lastDay;
        months.push(weeks);
      });
      return {
        year: +year,
        structure: data.leap ? LEAP_YEAR_STRUCTURE : YEAR_STRUCTURE,
        data,
        overview: months,
        startDays,
        endDays,
        collapsed: false,
      };
    });
  }
}
