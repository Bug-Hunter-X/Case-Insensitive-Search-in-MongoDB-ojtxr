# MongoDB Case-Insensitive Search Bug

This repository demonstrates a potential issue with case-insensitive searches in MongoDB when using regular expressions.  If you're not careful, using case-insensitive regular expressions without a case-insensitive index can lead to performance issues and unexpected results.

## Bug Description

The provided code uses a regular expression with the `i` flag for case-insensitive matching. If there's no case-insensitive index on the `name` field, MongoDB performs a full collection scan, impacting performance.  Furthermore, the results may be inconsistent.

## Solution

Ensure you create a case-insensitive index on the field you're querying to avoid collection scans and maintain predictable behavior.