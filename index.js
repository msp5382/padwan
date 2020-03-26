import moment from "moment";

class Padwan {
  constructor(schedule) {
    this.schedule = schedule;
  }

  isDateBefore = (first, second) => {
    return moment(first).isBefore(moment(second));
  };

  addSchedule = task => {
    const { start, end, data } = task;
    if (!this.isBusy(start, end)) {
      this.schedule.push(task);
      return this.schedule;
    } else {
      return new Error("Schedule is busy");
    }
  };

  getSchedule = () => {
    this.schedule = this.schedule.sort((first, second) =>
      this.isDateBefore(first.end, second.end) ? -1 : 1
    );
    return this.schedule;
  };

  deleteScheduleByDate = date => {
    this.schedule.filter(
      task =>
        !moment(date).isBetween(task.start, task.end) ||
        !moment(date).isSame(task.start) ||
        !moment(date).isSame(task.end)
    );
    this.schedule.filter(
      task =>
        !moment(date).isBetween(task.start, task.end) ||
        !moment(date).isSame(task.start) ||
        !moment(date).isSame(task.end)
    );
  };

  editScheduleDataByDate = (date, data) => {
    this.schedule[
      this.schedule.findIndex(
        task =>
          moment(date).isBetween(task.start, task.end) ||
          moment(date).isSame(task.start) ||
          moment(date).isSame(task.end)
      )
    ].data = data;
  };

  isBusy = (start, end) => {
    this.schedule = this.schedule.sort((first, second) =>
      this.isDateBefore(first.end, second.end) ? -1 : 1
    );
    return (
      this.schedule.findIndex(
        task =>
          moment(start).isBetween(task.start, task.end) ||
          moment(start).isSame(task.start) ||
          moment(start).isSame(task.end)
      ) >= 0 ||
      this.schedule.findIndex(
        task =>
          moment(end).isBetween(task.start, task.end) ||
          moment(end).isSame(task.start) ||
          moment(end).isSame(task.end)
      ) >= 0
    );
  };
}

export default Padwan;
