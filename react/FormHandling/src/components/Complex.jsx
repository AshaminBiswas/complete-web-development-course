function Complex() {




  return (
    <form>
      <div>
        <label>Gender</label>
        <label>
          <input type="radio" name="gender" value="male" />
          Male
        </label>
        <label>
          <input type="radio" name="gender" value="female" />
          Female
        </label>
      </div>

      <div>
        <label>Skills</label>
        <label>
          <input type="checkbox" name="skills" value="react" />
          React
        </label>
        <label>
          <input type="checkbox" name="skills" value="node" />
          Node
        </label>
        <label>
          <input type="checkbox" name="skills" value="css" />
          CSS
        </label>
      </div>

      <div>
        <label>Country</label>
        <select name="country">
          <option value="">Select</option>
          <option value="india">India</option>
          <option value="usa">USA</option>
          <option value="uk">UK</option>
        </select>
      </div>

      <div>
        <label>About</label>
        <textarea name="about"></textarea>
      </div>

      <div>
        <label>
          <input type="checkbox" name="terms" />
          Accept Terms
        </label>
      </div>

      <button type="submit">Submit</button>
    </form>
  );
}

export default Complex;
