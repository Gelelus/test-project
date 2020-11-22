export class CoreUtil {
  static isNil(value: any): boolean {
    return value === null || value === undefined;
  }

  static isContainsIgnoringCase(value1: string, value2: string): boolean {
    return value1.toLocaleUpperCase().includes(value2.toLocaleUpperCase());
  }

  static updateArrayLikeState(arrayOfData: any[], comparableId: number, updateItem: (item: any) => any) {
    return arrayOfData.map(item => {
      return item?.id === comparableId ? ({
        ...item,
        ...updateItem(item)
      }) : item;
    });
  }
}
