import { formatSeasons } from "./formatSeasons";

const episodes = {
  data: {
    id: 2993,
    url: "http://www.tvmaze.com/shows/2993/stranger-things",
    name: "Stranger Things",
    type: "Scripted",
    language: "English",
    genres: ["Drama", "Fantasy", "Science-Fiction"],
    status: "Running",
    runtime: 60,
    premiered: "2016-07-15",
    officialSite: "https://www.netflix.com/title/80057281",
    schedule: {
      time: "",
      days: ["Thursday"]
    },
    rating: {
      average: 8.7
    },
    weight: 98,
    network: null,
    webChannel: {
      id: 1,
      name: "Netflix",
      country: null
    },
    externals: {
      tvrage: 48493,
      thetvdb: 305288,
      imdb: "tt4574334"
    },
    image: {
      medium:
        "http://static.tvmaze.com/uploads/images/medium_portrait/200/501942.jpg",
      original:
        "http://static.tvmaze.com/uploads/images/original_untouched/200/501942.jpg"
    },
    summary:
      "<p>A love letter to the '80s classics that captivated a generation, <b>Stranger Things</b> is set in 1983 Indiana, where a young boy vanishes into thin air. As friends, family and local police search for answers, they are drawn into an extraordinary mystery involving top-secret government experiments, terrifying supernatural forces and one very strange little girl.</p>",
    updated: 1582785474,
    _links: {
      self: {
        href: "http://api.tvmaze.com/shows/2993"
      },
      previousepisode: {
        href: "http://api.tvmaze.com/episodes/1576476"
      }
    },
    _embedded: {
      episodes: [
        {
          id: 553946,
          url:
            "http://www.tvmaze.com/episodes/553946/stranger-things-1x01-chapter-one-the-vanishing-of-will-byers",
          name: "Chapter One: The Vanishing of Will Byers",
          season: 1,
          number: 1,
          airdate: "2016-07-15",
          airtime: "",
          airstamp: "2016-07-15T12:00:00+00:00",
          runtime: 60,
          image: {
            medium:
              "http://static.tvmaze.com/uploads/images/medium_landscape/67/168918.jpg",
            original:
              "http://static.tvmaze.com/uploads/images/original_untouched/67/168918.jpg"
          },
          summary:
            "<p>A young boy mysteriously disappears, and his panicked mother demands that the police find him. Meanwhile, the boy's friends conduct their own search, and meet a mysterious girl in the forest.</p>",
          _links: {
            self: {
              href: "http://api.tvmaze.com/episodes/553946"
            }
          }
        },
        {
          id: 578663,
          url:
            "http://www.tvmaze.com/episodes/578663/stranger-things-1x02-chapter-two-the-weirdo-on-maple-street",
          name: "Chapter Two: The Weirdo on Maple Street",
          season: 1,
          number: 2,
          airdate: "2016-07-15",
          airtime: "",
          airstamp: "2016-07-15T12:00:00+00:00",
          runtime: 60,
          image: {
            medium:
              "http://static.tvmaze.com/uploads/images/medium_landscape/72/181376.jpg",
            original:
              "http://static.tvmaze.com/uploads/images/original_untouched/72/181376.jpg"
          },
          summary:
            "<p>While the search for the missing Will continues, Joyce tells Jim about a call she apparently received from her son. Meanwhile, Jane warns Mike that there are bad people after her, and he realizes that she knows what happened to Will.</p>",
          _links: {
            self: {
              href: "http://api.tvmaze.com/episodes/578663"
            }
          }
        },
        {
          id: 909340,
          url:
            "http://www.tvmaze.com/episodes/909340/stranger-things-2x01-chapter-one-madmax",
          name: "Chapter One: MADMAX",
          season: 2,
          number: 1,
          airdate: "2017-10-27",
          airtime: "",
          airstamp: "2017-10-27T12:00:00+00:00",
          runtime: 60,
          image: {
            medium:
              "http://static.tvmaze.com/uploads/images/medium_landscape/132/331976.jpg",
            original:
              "http://static.tvmaze.com/uploads/images/original_untouched/132/331976.jpg"
          },
          summary:
            "<p>One year after the events with the Upside Down and the Demogorgon, Will meets with a government doctor. The boys discover that there's a new player in town, and Jim pays a visit to El.</p>",
          _links: {
            self: {
              href: "http://api.tvmaze.com/episodes/909340"
            }
          }
        },
        {
          id: 909342,
          url:
            "http://www.tvmaze.com/episodes/909342/stranger-things-2x02-chapter-two-trick-or-treat-freak",
          name: "Chapter Two: Trick or Treat, Freak",
          season: 2,
          number: 2,
          airdate: "2017-10-27",
          airtime: "",
          airstamp: "2017-10-27T12:00:00+00:00",
          runtime: 60,
          image: {
            medium:
              "http://static.tvmaze.com/uploads/images/medium_landscape/132/332034.jpg",
            original:
              "http://static.tvmaze.com/uploads/images/original_untouched/132/332034.jpg"
          },
          summary:
            "<p>The boys go trick-or-treating on Halloween, and Will has another vision. Meanwhile, El relieves the days following her escape from the Upside Down, and Dustin finds something in the garbage can.</p>",
          _links: {
            self: {
              href: "http://api.tvmaze.com/episodes/909342"
            }
          }
        }
      ]
    }
  }
};

test("formatSeasons functions works", () => {
  const value = formatSeasons(episodes.data._embedded.episodes);
  expect(value).toHaveProperty("Season 1");
  expect(value).toHaveProperty("Season 2");
});
