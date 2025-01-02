export default {
  async registerCoach(context, data) {
    const coachId = context.rootGetters.userId;
    const coachData = {
      firstName: data.first,
      lastName: data.last,
      description: data.desc,
      hourlyRate: data.rate,
      areas: data.areas,
    };

    const response = await fetch(
      `https://vue-https-demo-e4aa2-default-rtdb.firebaseio.com/${coachId}.json`,
      {
        method: 'PUT',
        body: JSON.stringify(coachData),
        headers: {
          'Content-Type': 'application/json',
        },
      }
    );

    // const responseData = await response.json()

    if (!response.ok) {
      const error = new Error(
        response.statusText || 'Failed to register coach.'
      );
      throw error;
    }
    context.commit('registerCoach', {
      ...coachData,
      coachId,
    });
  },
  async loadCoaches(context, payload) {
    if (!payload.forceRefresh && !context.getters.shouldUpdate) {
      return;
    }

    const response = await fetch(
      `https://vue-https-demo-e4aa2-default-rtdb.firebaseio.com/.json`
    );

    const responseData = await response.json();

    if (!response.ok) {
      const error = new Error(responseData.message || 'Failed to fetch!');
      throw error;
    }
    const coaches = [];
    for (const key in responseData) {
      const coach = {
        id: key,
        firstName: responseData[key].firstName,
        lastName: responseData[key].lastName,
        description: responseData[key].description,
        hourlyRate: responseData[key].hourlyRate,
        areas: responseData[key].areas,
      };
      coaches.push(coach);
    }
    context.commit('setCoaches', coaches);
    context.commit('setFetchTimeStamp');
  },
};
