window.BENCHMARK_DATA = {
  "lastUpdate": 1613752875931,
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
    ]
  }
}