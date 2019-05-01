import { createSelector } from "reselect";

// Super simple selector
export const makesSelector = state => state.makes.makes;

const competitors = (allMakes, make, isCommon = false) => {
  console.log(`Calculating ${make.make_display}`);
  return allMakes.reduce((a, cv) => {
    if (cv.make_id !== make.make_id && cv.make_country === make.make_country) {
      if (!isCommon || cv.make_is_common === "1") {
        a.push(cv);
      }
    }
    return a;
  }, []);
};

export const makesWithCompetitorsO1 = state => {
  // Use object as a hash map
  const makes = makesSelector(state);
  const totals = {};
  const totalsCommon = {};

  // Initialise hash maps
  makes.forEach(make => {
    totals[make.make_country] = 0;
    totalsCommon[make.make_country] = 0;
  });

  // Run statistics
  makes.forEach(make => {
    totals[make.make_country]++;
    make.make_is_common === "1" && totalsCommon[make.make_country]++;
  });

  return makes.map(make => ({
    ...make,
    competitorCount: totals[make.make_country],
    commonCompetitorCount: totalsCommon[make.make_country],
  }));
};

// Selector with calculation
export const makesWithCompetitors = state =>
  state.makes.makes.map(make => ({
    competitorCount: competitors(state.makes.makes, make).length,
    commonCompetitorCount: competitors(state.makes.makes, make, true).length,
    ...make,
  }));

// Reselector
export const makesWithCompetitorsReselect = createSelector(
  makesSelector,
  makes =>
    makes.map(make => ({
      competitorCount: competitors(makes, make).length,
      commonCompetitorCount: competitors(makes, make, true).length,
      ...make,
    })),
);
