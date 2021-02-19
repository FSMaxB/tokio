window.BENCHMARK_DATA = {
  "lastUpdate": 1613752918041,
  "repoUrl": "https://github.com/FSMaxB/tokio",
  "entries": {
    "sync_rwlock": [
      {
        "commit": {
          "author": {
            "email": "te316e89@gmail.com",
            "name": "Taiki Endo",
            "username": "taiki-e"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": false,
          "id": "36d7dab504a526edd81d17744aae36f11ab3ee4a",
          "message": "chore: remove html_root_url (#3489)\n\nCo-authored-by: Alice Ryhl <alice@ryhl.io>",
          "timestamp": "2021-02-18T14:11:39-08:00",
          "tree_id": "8878fcca2ed0b594e0a79a64a96462577bb5f970",
          "url": "https://github.com/FSMaxB/tokio/commit/36d7dab504a526edd81d17744aae36f11ab3ee4a"
        },
        "date": 1613752875045,
        "tool": "cargo",
        "benches": [
          {
            "name": "read_concurrent_contended",
            "value": 834,
            "range": "± 5",
            "unit": "ns/iter"
          },
          {
            "name": "read_concurrent_contended_multi",
            "value": 12764,
            "range": "± 2534",
            "unit": "ns/iter"
          },
          {
            "name": "read_concurrent_uncontended",
            "value": 864,
            "range": "± 2",
            "unit": "ns/iter"
          },
          {
            "name": "read_concurrent_uncontended_multi",
            "value": 12625,
            "range": "± 2468",
            "unit": "ns/iter"
          },
          {
            "name": "read_uncontended",
            "value": 492,
            "range": "± 24",
            "unit": "ns/iter"
          }
        ]
      }
    ],
    "rt_multi_threaded": [
      {
        "commit": {
          "author": {
            "email": "te316e89@gmail.com",
            "name": "Taiki Endo",
            "username": "taiki-e"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": false,
          "id": "36d7dab504a526edd81d17744aae36f11ab3ee4a",
          "message": "chore: remove html_root_url (#3489)\n\nCo-authored-by: Alice Ryhl <alice@ryhl.io>",
          "timestamp": "2021-02-18T14:11:39-08:00",
          "tree_id": "8878fcca2ed0b594e0a79a64a96462577bb5f970",
          "url": "https://github.com/FSMaxB/tokio/commit/36d7dab504a526edd81d17744aae36f11ab3ee4a"
        },
        "date": 1613752884258,
        "tool": "cargo",
        "benches": [
          {
            "name": "chained_spawn",
            "value": 181685,
            "range": "± 37729",
            "unit": "ns/iter"
          },
          {
            "name": "ping_pong",
            "value": 680659,
            "range": "± 83609",
            "unit": "ns/iter"
          },
          {
            "name": "spawn_many",
            "value": 5181171,
            "range": "± 1091512",
            "unit": "ns/iter"
          },
          {
            "name": "yield_many",
            "value": 18606750,
            "range": "± 2843426",
            "unit": "ns/iter"
          }
        ]
      }
    ],
    "sync_semaphore": [
      {
        "commit": {
          "author": {
            "email": "te316e89@gmail.com",
            "name": "Taiki Endo",
            "username": "taiki-e"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": false,
          "id": "36d7dab504a526edd81d17744aae36f11ab3ee4a",
          "message": "chore: remove html_root_url (#3489)\n\nCo-authored-by: Alice Ryhl <alice@ryhl.io>",
          "timestamp": "2021-02-18T14:11:39-08:00",
          "tree_id": "8878fcca2ed0b594e0a79a64a96462577bb5f970",
          "url": "https://github.com/FSMaxB/tokio/commit/36d7dab504a526edd81d17744aae36f11ab3ee4a"
        },
        "date": 1613752884815,
        "tool": "cargo",
        "benches": [
          {
            "name": "contended_concurrent_multi",
            "value": 14385,
            "range": "± 3822",
            "unit": "ns/iter"
          },
          {
            "name": "contended_concurrent_single",
            "value": 1081,
            "range": "± 65",
            "unit": "ns/iter"
          },
          {
            "name": "uncontended",
            "value": 650,
            "range": "± 60",
            "unit": "ns/iter"
          },
          {
            "name": "uncontended_concurrent_multi",
            "value": 14637,
            "range": "± 3974",
            "unit": "ns/iter"
          },
          {
            "name": "uncontended_concurrent_single",
            "value": 1080,
            "range": "± 51",
            "unit": "ns/iter"
          }
        ]
      }
    ],
    "sync_mpsc": [
      {
        "commit": {
          "author": {
            "email": "te316e89@gmail.com",
            "name": "Taiki Endo",
            "username": "taiki-e"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": false,
          "id": "36d7dab504a526edd81d17744aae36f11ab3ee4a",
          "message": "chore: remove html_root_url (#3489)\n\nCo-authored-by: Alice Ryhl <alice@ryhl.io>",
          "timestamp": "2021-02-18T14:11:39-08:00",
          "tree_id": "8878fcca2ed0b594e0a79a64a96462577bb5f970",
          "url": "https://github.com/FSMaxB/tokio/commit/36d7dab504a526edd81d17744aae36f11ab3ee4a"
        },
        "date": 1613752917089,
        "tool": "cargo",
        "benches": [
          {
            "name": "contention_bounded",
            "value": 6494407,
            "range": "± 2649226",
            "unit": "ns/iter"
          },
          {
            "name": "contention_bounded_full",
            "value": 6348225,
            "range": "± 1696284",
            "unit": "ns/iter"
          },
          {
            "name": "contention_unbounded",
            "value": 5503446,
            "range": "± 2251055",
            "unit": "ns/iter"
          },
          {
            "name": "create_100_000_medium",
            "value": 793,
            "range": "± 155",
            "unit": "ns/iter"
          },
          {
            "name": "create_100_medium",
            "value": 766,
            "range": "± 120",
            "unit": "ns/iter"
          },
          {
            "name": "create_1_medium",
            "value": 773,
            "range": "± 106",
            "unit": "ns/iter"
          },
          {
            "name": "send_large",
            "value": 132855,
            "range": "± 15978",
            "unit": "ns/iter"
          },
          {
            "name": "send_medium",
            "value": 1724,
            "range": "± 243",
            "unit": "ns/iter"
          },
          {
            "name": "uncontented_bounded",
            "value": 1030573,
            "range": "± 150794",
            "unit": "ns/iter"
          },
          {
            "name": "uncontented_unbounded",
            "value": 715635,
            "range": "± 60368",
            "unit": "ns/iter"
          }
        ]
      }
    ]
  }
}