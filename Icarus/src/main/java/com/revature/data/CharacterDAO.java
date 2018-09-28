package com.revature.data;

import java.util.Set;

import com.revature.beans.Character;
public interface CharacterDAO {
	public Character addCharacter(Character character);
	public Character getCharacterById(int characterId);
	public Set<Character> getAllCharacters();
	public Set<Character> getAllCharactersByUser(int userId);
	public void deleteUser(Character character);
	public void updateUser(Character character);
}
