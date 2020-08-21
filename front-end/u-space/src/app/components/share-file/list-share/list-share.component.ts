import {Folder} from '../../../models/folder.model';



  this.sortedData = data.sort((a, b) => {
    const isAsc = sort.direction === 'asc';
    switch (sort.active) {
      case 'name': return compare(a.name, b.name, isAsc);
      case 'calories': return compare(a.calories, b.calories, isAsc);
      case 'fat': return compare(a.fat, b.fat, isAsc);
      case 'carbs': return compare(a.carbs, b.carbs, isAsc);
      case 'protein':return compare(a.protein, b.protein, isAsc);
      default: return 0;
    }
  });



function compare(a: number | string, b: number | string, isAsc: boolean) {
return (a < b ? -1 : 1) * (isAsc ? 1 : -1);
}

  ngOnInit(): void {
  }






