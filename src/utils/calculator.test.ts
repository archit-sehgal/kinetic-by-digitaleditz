/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import test from 'node:test';
import assert from 'node:assert/strict';
import {
  calculateInstagramGrowth,
  calculateAuditScore,
  validateBookingForm,
} from './calculator';

test('calculateInstagramGrowth produces realistic growth metrics', () => {
  const result = calculateInstagramGrowth(5000, 'luxury_real_estate', 16);
  assert.ok(result.projectedMonthlyReach > 100000, 'Monthly reach should exceed 100K for 16 reels');
  assert.ok(result.projectedProfileVisits > 5000, 'Profile visits should scale with reach');
  assert.ok(result.projectedMonthlyQualifiedLeads >= 6, 'Should produce at least baseline leads');
  assert.ok(result.projectedPipelineValue > 0, 'Pipeline value should be positive');
  assert.equal(result.currentFollowers, 5000);
});

test('calculateInstagramGrowth handles boundary inputs cleanly', () => {
  const result = calculateInstagramGrowth(0, 'unknown_niche');
  assert.equal(result.currentFollowers, 100, 'Should enforce minimum safe floor');
  assert.ok(result.projectedMonthlyReach > 0);
});

test('calculateAuditScore scores correctly based on weighted checks', () => {
  const allIds = [
    'hook_velocity',
    'subtitles_kinetic',
    'pace_retention',
    'bio_conversion',
    'comment_dm_automation',
    'sound_design',
    'safe_zones',
    'calendar_link_friction',
  ];
  const fullScore = calculateAuditScore(allIds);
  assert.equal(fullScore.passedCount, 8);
  assert.equal(fullScore.scorePercentage, 100);
  assert.equal(fullScore.grade, 'Elite Scale');

  const emptyScore = calculateAuditScore([]);
  assert.equal(emptyScore.passedCount, 0);
  assert.equal(emptyScore.scorePercentage, 0);
  assert.equal(emptyScore.grade, 'Needs Overhaul');

  const partialScore = calculateAuditScore(['hook_velocity', 'subtitles_kinetic']);
  assert.ok(partialScore.scorePercentage > 0 && partialScore.scorePercentage < 60);
});

test('validateBookingForm verifies required fields and email syntax', () => {
  const invalid = validateBookingForm({
    name: '',
    email: 'not-an-email',
    instagramHandle: '',
    date: '',
    timeSlot: '',
  });

  assert.equal(invalid.isValid, false);
  assert.ok(invalid.errors.name);
  assert.ok(invalid.errors.email);
  assert.ok(invalid.errors.instagramHandle);
  assert.ok(invalid.errors.date);
  assert.ok(invalid.errors.timeSlot);

  const valid = validateBookingForm({
    name: 'Sarah Connor',
    email: 'sarah@skynetdefense.io',
    instagramHandle: '@sarahconnor',
    date: '2026-11-12',
    timeSlot: '11:30 AM EST',
  });

  assert.equal(valid.isValid, true);
  assert.equal(Object.keys(valid.errors).length, 0);
});
