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
};
