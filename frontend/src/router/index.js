import Vue from 'vue';
import Router from 'vue-router';
import Timetable from '@/components/timetable/Timetable';

Vue.use(Router);

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Timetable',
      component: Timetable,
    },
  ],
});
